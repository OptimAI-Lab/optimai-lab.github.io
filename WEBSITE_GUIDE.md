# Website Update Guide

This guide explains how to update each section of the OptimAI Lab website.

## Quick Links

| Section | What to Update | Detailed Guide |
|---------|---------------|----------------|
| **Home** | Announcements, featured projects | [HOME_GUIDE.md](HOME_GUIDE.md) |
| **News** | News posts, announcements | [NEWS_GUIDE.md](NEWS_GUIDE.md) |
| **Projects** | Research projects | [PROJECTS_GUIDE.md](PROJECTS_GUIDE.md) |
| **People** | Team members | [PEOPLE_GUIDE.md](PEOPLE_GUIDE.md) |
| **Activities** | Group photos, events | [ACTIVITIES_GUIDE.md](ACTIVITIES_GUIDE.md) |

## File Locations

```
_pages/
├── about.md       → Home page content
├── news.md        → News page (list view)
├── projects.md    → Projects page (list view)
├── activity.md    → Activities page (manual content)
└── profiles.md    → People page (manual content)

_news/             → Individual news posts
_projects/         → Individual project cards

assets/img/
├── people/        → Profile photos
├── activities/    → Activity/group photos
├── projects/      → Project thumbnails
├── news/          → News images
└── home/          → Banner image
```

## Common Tasks

### Adding a New Team Member
→ See [PEOPLE_GUIDE.md](PEOPLE_GUIDE.md)

### Adding a New Project
→ See [PROJECTS_GUIDE.md](PROJECTS_GUIDE.md)

### Adding News/Announcements
→ See [NEWS_GUIDE.md](NEWS_GUIDE.md)

### Adding Group Activities
→ See [ACTIVITIES_GUIDE.md](ACTIVITIES_GUIDE.md)

### Updating Home Page
→ See [HOME_GUIDE.md](HOME_GUIDE.md)

## Before Publishing

After making changes, always:

1. **Build locally to verify:**
   ```bash
   docker compose up --build
   ```
   Visit http://localhost:8080 to check

2. **Format code:**
   ```bash
   npx prettier . --write
   ```

3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "Description of changes"
   git push
   ```