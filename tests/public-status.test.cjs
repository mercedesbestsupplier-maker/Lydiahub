const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const sandbox = { window: {}, document: { addEventListener() {} } };
vm.runInNewContext(fs.readFileSync(path.join(root, 'public-status.js'), 'utf8'), sandbox);

const files = [root, path.join(root, 'teammates')]
  .flatMap((dir) => fs.readdirSync(dir).filter((name) => name.endsWith('.js')).map((name) => path.join(dir, name)));
const unpublished = /^(?:\.\.\/|\.\/|\/)*(?:dist|skills|docs)\//;

function inspect(node, found = []) {
  if (Array.isArray(node)) node.forEach((item) => inspect(item, found));
  else if (node && typeof node === 'object') {
    for (const value of Object.values(node)) {
      if (typeof value === 'string' && unpublished.test(value)) found.push(value);
      else inspect(value, found);
    }
  }
  return found;
}

test('public data never advertises missing package and source paths', () => {
  let dataFiles = 0;
  let missingBefore = 0;
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    if (!source.startsWith('const DATA = {')) continue;
    const end = source.indexOf('\n};');
    assert.ok(end > 0, file);
    const data = vm.runInNewContext(source.slice(0, end + 3) + '\nDATA');
    missingBefore += inspect(data).length;
    sandbox.window.applyPublicAvailability(data);
    assert.deepEqual(inspect(data), [], file);
    for (const skill of data.skills || []) {
      if (skill.download === '') assert.equal(skill.hasPackage, false, `${file}: ${skill.slug}`);
    }
    dataFiles++;
  }
  assert.equal(dataFiles, 10);
  assert.ok(missingBefore > 400);
});

test('every published HTML page loads the status guard before page data', () => {
  let pages = 0;
  for (const dir of [root, path.join(root, 'teammates')]) {
    for (const name of fs.readdirSync(dir).filter((value) => value.endsWith('.html'))) {
      const source = fs.readFileSync(path.join(dir, name), 'utf8');
      const expected = dir === root ? './public-status.js' : '../public-status.js';
      assert.ok(source.includes(`<script src="${expected}"></script>`), name);
      assert.ok(source.indexOf(expected) < source.lastIndexOf('<script src='), name);
      pages++;
    }
  }
  assert.equal(pages, 20);
});
