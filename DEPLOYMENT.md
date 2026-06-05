# CyberOak Website — Deployment Guide
## Deploy to GitHub Pages + Point cyberoak.in domain

---

## STEP 1: Create GitHub Repository

1. Go to github.com — sign in (or create account if needed)
2. Click the **+** icon → **New repository**
3. Name it exactly: `cyberoak-website`
4. Set to **Public** (required for free GitHub Pages)
5. DO NOT check "Add README" — leave empty
6. Click **Create repository**

---

## STEP 2: Upload Your Website Files

**Option A — GitHub Web Interface (easiest, no terminal needed):**

1. Open your new repository
2. Click **"uploading an existing file"** link
3. Drag and drop ALL these files/folders:
   ```
   index.html
   css/
   js/
   images/
   pages/
   CNAME
   ```
4. Scroll down → Write commit message: "Initial website launch"
5. Click **Commit changes**

**Option B — GitHub Desktop App:**
1. Download GitHub Desktop from desktop.github.com
2. Clone your repository to your computer
3. Copy all CyberOak website files into the cloned folder
4. Click "Commit to main" → "Push origin"

---

## STEP 3: Enable GitHub Pages

1. In your repository, click **Settings** tab
2. Click **Pages** in the left sidebar
3. Under **Source**: select **Deploy from a branch**
4. Branch: select **main** / folder: **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes
7. GitHub will show: "Your site is live at https://[username].github.io/cyberoak-website"

Test this URL first — make sure the site looks correct.

---

## STEP 4: Point cyberoak.in to GitHub Pages

### Part A — Add CNAME file to repository
The `CNAME` file is already created in this project with content:
```
cyberoak.in
```
Make sure this file is uploaded in Step 2.

### Part B — DNS Settings at your domain registrar

Log into wherever you bought cyberoak.in (GoDaddy / BigRock / Namecheap / Google Domains etc.)

Go to **DNS Management** / **DNS Zone Editor** and add these records:

**Delete any existing A records for @ first, then add:**

| Type | Host/Name | Value              | TTL  |
|------|-----------|-------------------|------|
| A    | @         | 185.199.108.153   | 3600 |
| A    | @         | 185.199.109.153   | 3600 |
| A    | @         | 185.199.110.153   | 3600 |
| A    | @         | 185.199.111.153   | 3600 |
| CNAME| www       | cyberoak31-mukesh.github.io | 3600 |

**Replace `cyberoak31-mukesh` with your actual GitHub username.**

### Part C — Add custom domain in GitHub Pages

1. Go back to GitHub → Settings → Pages
2. Under **Custom domain**: type `cyberoak.in`
3. Click **Save**
4. Check **Enforce HTTPS** once it appears (takes ~24 hours)

---

## STEP 5: Wait for DNS Propagation

- DNS changes take **2–48 hours** to fully propagate
- Test using: https://dnschecker.org (check cyberoak.in)
- Once green worldwide, your site is live at cyberoak.in

---

## FILE STRUCTURE REFERENCE

```
cyberoak-website/
├── index.html          ← Homepage
├── CNAME               ← cyberoak.in (for custom domain)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← All JavaScript
├── images/
│   └── logo.png        ← CyberOak logo
└── pages/
    ├── kavach.html     ← Kavach product page
    ├── resources.html  ← Resources & safety tips
    ├── about.html      ← About Mukesh & CyberOak
    ├── terms.html      ← Terms & Privacy Policy
    └── contact.html    ← Contact page
```

---

## AFTER GOING LIVE — CHECKLIST

- [ ] Test all pages on mobile phone
- [ ] Test WhatsApp link (+91 8624892131)
- [ ] Test Telegram link
- [ ] Share with 5 people and ask for feedback
- [ ] Submit to Google Search Console (search.google.com/search-console)
- [ ] Add Google Analytics (optional) — free at analytics.google.com

---

## UPDATES (How to edit the website later)

1. Make changes to HTML/CSS files on your computer
2. Go to github.com → your repository
3. Click the file you want to edit
4. Click the pencil (✏️) icon to edit
5. Make changes → Commit changes
6. Site updates automatically in 1–2 minutes

---

## SUPPORT

Any issues: help@cyberoak.in
GitHub Pages docs: docs.github.com/pages
