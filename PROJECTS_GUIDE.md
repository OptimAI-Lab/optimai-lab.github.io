# Managing Projects

## Adding a New Project

### Step 1: Add Project Thumbnail

Place the image in `assets/img/projects/` folder.

**Naming convention:** Use project name (e.g., `new_project.png`)

### Step 2: Create Project File

Create a new `.md` file in `_projects/` folder.

**Naming convention:** `N_project-name.md` where N is the order number (e.g., `7_new_project.md`)

### Step 3: Add Frontmatter

```yaml
---
layout: page
title: Project Title
slug: project-slug          # Required for Home page display
description: Short description
img: assets/img/projects/image.png   # Thumbnail image
importance: 5               # Order in Projects page (lower = first)
category: research          # Category for filtering
redirect: https://github.com/link   # Optional: redirect to external page
---
```

### Step 4: Add Project Content

```markdown
Project description and details...

### Selected Publications

- Author et al., "Paper Title", **Conference/Journal**, Year
```

### Example: New Project

```yaml
---
layout: page
title: New Research Project
slug: new-project
description: Description of the project
img: assets/img/projects/new_project.png
importance: 7
category: research
---

This project focuses on... 

### Selected Publications

- A. Author, "Paper Title", **Conference 2026**
```

## Displaying Projects on Home Page

Edit `_pages/about.md` and update the `sampled_projects` section:

```yaml
sampled_projects:
  enabled: true
  projects: [leak-k, optimization, multiagent]  # List project slugs here
  show_more_link: true
```

**To add:** Append a project `slug` to the list
**To remove:** Delete a slug from the list

The `slug` in the project file must match exactly with what's listed here.

## Project Order

Projects are sorted by `importance` number (lower appears first):
- `importance: 0` → First
- `importance: 1` → Second
- etc.

## Redirect Projects

For projects that link to external pages (like GitHub repos):

```yaml
---
layout: page
title: Project Name
redirect: https://github.com/OptimAI-Lab/project-name
---
```

No content needed - clicking the project card goes directly to the link.

## Removing a Project

1. Delete the `.md` file from `_projects/`
2. Optionally remove the thumbnail from `assets/img/projects/`
3. If featured on Home, remove the slug from `sampled_projects.projects` list