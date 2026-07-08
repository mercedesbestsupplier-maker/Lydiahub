import urllib.request
import os

avatars = {
    "chief-of-staff": "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=d7ff58",
    "market-intel": "https://api.dicebear.com/7.x/notionists/svg?seed=Alice&backgroundColor=87c7d6",
    "china-research": "https://api.dicebear.com/7.x/notionists/svg?seed=Lucy&backgroundColor=78d8a6",
    "content-cmo": "https://api.dicebear.com/7.x/notionists/svg?seed=Mia&backgroundColor=ffb35b",
    "overseas-social": "https://api.dicebear.com/7.x/notionists/svg?seed=Sophia&backgroundColor=f7819f",
    "lead-gen": "https://api.dicebear.com/7.x/notionists/svg?seed=Leo&backgroundColor=9ad26a",
    "commerce-operator": "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=ff8a5c",
    "office-analyst": "https://api.dicebear.com/7.x/notionists/svg?seed=Jack&backgroundColor=f2f0e6",
    "customer-success": "https://api.dicebear.com/7.x/notionists/svg?seed=Emma&backgroundColor=ffcce6",
    "risk-finance": "https://api.dicebear.com/7.x/notionists/svg?seed=James&backgroundColor=cce6ff"
}

for name, url in avatars.items():
    try:
        filepath = f"/Users/macmini/Documents/自己灵感/site/assets/avatars/{name}.svg"
        urllib.request.urlretrieve(url, filepath)
        print(f"Downloaded {name}.svg")
    except Exception as e:
        print(f"Failed {name}: {e}")
