# Managing Projects

## Adding a New Project

1. Create a new `.md` file in `_projects/` folder (e.g., `_projects/7_new_project.md`)
2. Add the following frontmatter:

```yaml
---
layout: page
title: Project Title
slug: project-slug          # Required for Home page display
description: Short description
img: assets/img/image.png   # Optional thumbnail
importance: 5               # Order in Projects page (lower = first)
category: research          # Category for filtering
---
```

3. Add project content below the frontmatter

## Displaying Projects on Home Page

Edit `_pages/about.md` and update the `sampled_projects` section:

```yaml
sampled_projects:
  enabled: true
  projects: [leak-k, optimization, multiagent]  # List project slugs here
  show_more_link: true
```

**To add:** Append a project slug to the list
**To remove:** Delete a slug from the list

The `slug` in the project file must match exactly with what's listed here.