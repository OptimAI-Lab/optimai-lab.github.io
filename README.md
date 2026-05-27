# OptimAI Lab Website

This repository contains the source code for the [OptimAI Lab website](https://optimai-lab.github.io).

Built with [Jekyll](https://jekyllrb.com/) using the [al-folio](https://github.com/alshedivat/al-folio) theme.

---

## Guide to Update the Website

### Step 1: Sync Your Local Branch

Before making any changes, always sync with the main branch to avoid conflicts:

```bash
git checkout main
git pull origin main
```

If you were working on a feature branch, merge main into it:

```bash
git checkout your-branch
git merge main
```

Resolve any conflicts before proceeding.

### Step 2: Make Your Changes

Update the relevant files for your task. See the [Page-Specific Instructions](#page-specific-instructions) section below.

### Step 3: Build and Verify Locally (Optional)

For small changes (text updates, minor edits), you can skip this step and use Claude Code to verify and commit directly.

For significant changes (new pages, layout modifications, new images), verify locally before committing:

```bash
docker compose up --build
```

Visit http://localhost:8080 and check:
- Navigation links work correctly
- Images display properly
- Content is formatted correctly
- Dark mode still works

### Step 4: Commit and Push

```bash
git add -A
git commit -m "Description of changes"
git push
```

---

## Page-Specific Instructions

### Home Page

**What you can update:** Projects and News

**Files to edit:**
- `_pages/about.md` — Main home page content

**Detailed guide:** [HOME_GUIDE.md](HOME_GUIDE.md)

---

### News

**What you can update:** News posts, announcements, updates

**Files to edit:**
- `_news/YYYY-MM-DD-title.md` — Create new files for each news post
- `_pages/news.md` — News page layout (rarely needs editing)

**To add news:**
1. Create a new file in `_news/` with format `YYYY-MM-DD-title.md`
2. Add front matter with `title`, `date`, `author`, `image` (optional)
3. Write content in Markdown below the front matter

**Detailed guide:** [NEWS_GUIDE.md](NEWS_GUIDE.md)

---

### Projects

**What you can update:** Research projects, project descriptions, thumbnails

**Files to edit:**
- `_projects/project-name.md` — One file per project

**To add a project:**
1. Create a new file in `_projects/` with a descriptive filename
2. Add front matter with `title`, `description`, `img`, `github` (optional), `external_link` (optional)
3. Add detailed description in Markdown below

**Detailed guide:** [PROJECTS_GUIDE.md](PROJECTS_GUIDE.md)

---

### People

**What you can update:** Team members, profile photos, roles

**Files to edit:**
- `_pages/profiles.md` — Manual list of team members
- `assets/img/people/` — Profile photos

**To add a team member:**
1. Add their photo to `assets/img/people/`
2. Edit `_pages/profiles.md` and add their entry with name, role, photo path, and links

**Detailed guide:** [PEOPLE_GUIDE.md](PEOPLE_GUIDE.md)

---

### Activities

**What you can update:** Group photos, event photos, lab activities

**Files to edit:**
- `_pages/activity.md` — Manual gallery of activities
- `assets/img/activities/` — Activity/group photos

**To add activities:**
1. Add photos to `assets/img/activities/`
2. Edit `_pages/activity.md` and add image entries to the gallery

**Detailed guide:** [ACTIVITIES_GUIDE.md](ACTIVITIES_GUIDE.md)

---

## Repository Structure

```
optimai-lab.github.io/
├── _config.yml           # Site configuration (url, title, etc.)
├── _pages/               # Main pages
│   ├── about.md          # Home page content
│   ├── news.md           # News page
│   ├── projects.md       # Projects page
│   ├── profiles.md       # People page (manual)
│   └── activity.md       # Activities page (manual)
├── _news/                # News posts (one file per post)
├── _projects/            # Project cards (one file per project)
├── _data/                # YAML data files (navigation, CV data)
├── _includes/            # Reusable Liquid templates
├── _layouts/             # Page layouts
├── _sass/                # Stylesheets
├── assets/
│   ├── img/
│   │   ├── people/       # Profile photos
│   │   ├── activities/  # Activity/group photos
│   │   ├── projects/     # Project thumbnails
│   │   ├── news/         # News images
│   │   └── home/         # Banner image
│   └── js/               # JavaScript files
├── _bibliography/        # BibTeX files for publications
└── Gemfile               # Ruby dependencies
```

## Quick Reference

| Task | File(s) to Edit |
|------|-----------------|
| Update home page | `_pages/about.md` |
| Add news post | `_news/YYYY-MM-DD-title.md` |
| Add project | `_projects/project-name.md` |
| Add team member | `_pages/profiles.md`, `assets/img/people/` |
| Add activity photos | `_pages/activity.md`, `assets/img/activities/` |
| Change site title/url | `_config.yml` |

## More Resources

- [INSTALL.md](INSTALL.md) — Installation and deployment details
- [CUSTOMIZE.md](CUSTOMIZE.md) — Customization guide
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) — Common issues and solutions
- [al-folio documentation](https://github.com/alshedivat/al-folio) — Original theme repository