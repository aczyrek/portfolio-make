# Adrian Czyrek — AI Automation Portfolio

> Personal portfolio showcasing Make.com automation case studies with AI integrations.

![Portfolio Preview](images/automation_thumbnail.png)

---

## Overview

A dark-mode, single-page portfolio built to present real-world business process automation projects. Each case study includes a full project breakdown (challenge → solution → result), an interactive flow diagram, and a downloadable Make.com blueprint (JSON).

**Live technologies used across showcased projects:**
`Make.com` · `Google Gemini AI` · `OpenAI` · `Airtable` · `Google Sheets` · `Meta Ads API` · `Jira` · `Slack` · `Todoist`

---

## Projects

| # | Project | Category |
|---|---------|----------|
| 01 | **Centralized AI Task Management System** | Task Automation & AI |
| 02 | **Automated Meta Ads Results Extractor** | Performance Marketing & Reporting |
| 03 | **Automated Jira Task Status Report in Slack** | IT Service Management |
| 04 | **ID POS → Google Sheets Sales Reporter (Legia Sports Bar)** | POS Integration & AI Categorization |

Each project includes a **downloadable Make.com blueprint** (`.json`) in the [`blueprints/`](blueprints/) directory, ready to import into your Make.com workspace.

---

## Tech Stack (Portfolio itself)

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic |
| Styling | CSS3 — custom properties, grid, glassmorphism, scroll animations |
| Logic | Vanilla JavaScript — IntersectionObserver, modal, smooth scroll |
| Fonts | [Outfit](https://fonts.google.com/specimen/Outfit) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Hosting | Static — deployable to GitHub Pages, Netlify, Vercel |

---

## Project Structure

```
portfolio-make/
├── index.html              # Single-page app entry point
├── css/
│   └── style.css           # All styles — variables, layout, animations
├── js/
│   └── script.js           # Scroll effects, modal, smooth navigation
├── images/
│   ├── automation_thumbnail.png
│   ├── analytics_thumbnail_2.png
│   ├── jira_slack_thumbnail.png
│   └── favicon.png
└── blueprints/
    ├── project-1.json      # Make.com: AI Task Management
    ├── project-2.json      # Make.com: Meta Ads Extractor
    ├── project-3.json      # Make.com: Jira → Slack Reporter
    └── project-4.json      # Make.com: ID POS → Sheets (Legia)
```

---

## Running Locally

No build step required — this is a pure static site.

```bash
git clone https://github.com/your-username/portfolio-make.git
cd portfolio-make
open index.html
```

Or use any local server:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then open `http://localhost:8080`.

---

## Importing a Blueprint into Make.com

1. Open [make.com](https://www.make.com) and go to **Scenarios**
2. Click **Create a new scenario**
3. Click the **three-dot menu** → **Import Blueprint**
4. Upload the `.json` file from the [`blueprints/`](blueprints/) directory
5. Reconnect your own credentials (connections, API keys)

> **Note:** Blueprints are sanitized — all personal credentials have been replaced with `YOUR_EMAIL` / `YOUR_PASSWORD` placeholders.

---

## Design Decisions

- **Dark mode only** — optimized for the tech/automation audience
- **Glassmorphism cards** — `backdrop-filter: blur` with subtle borders
- **No framework** — intentionally vanilla for maximum performance and portability
- **IntersectionObserver** — staggered entrance animations without a library
- **CSS custom properties** — full design token system (`--accent-primary`, `--glass-bg`, etc.)

---

## Contact

**Adrian Czyrek**
AI Automation Architect & Technical Communication Specialist

- Email: [adrian.czyrek5@gmail.com](mailto:adrian.czyrek5@gmail.com)
- LinkedIn: [linkedin.com/in/adrian-czyrek](https://www.linkedin.com/in/adrian-czyrek/)

---

*Built with precision. Automated with purpose.*
