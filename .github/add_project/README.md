# How to Add a New Project

This guide explains how to add a new project to the OptimAI Lab website.

## Where to Add Projects

All projects are stored in the `_projects/` folder. Each project is a separate markdown file.

## Project File Structure

Each project file should follow this structure:

```markdown
---
layout: page
title: [Project Name]
description: [Short description of the project]
img: assets/img/[image filename]
importance: [number - determines ordering]
category: research
redirect: [external URL if project links elsewhere]
---

[Additional project details and description]
```

### Required Fields

- **title**: The name of your project
- **description**: A brief description shown below the project title on the card
- **img**: Path to the project thumbnail image (must be in `assets/img/`)
- **importance**: A number that determines the ordering (lower numbers appear first)
- **category**: The category the project belongs to (currently `research`)

### Optional Fields

- **redirect**: If your project has an external GitHub repo or website, add this field to link directly to it
- **github**: If you want to show a GitHub icon with a link to the code repository

## Adding the Project Image

1. Place your project image in the `assets/img/` folder
2. Reference it in the project file as `img: assets/img/[filename]`

## Example: Adding Leak@k Project

Here is a complete example of how the **Leak@k** project was added:

### Step 1: Add the Image

Move the project image to the assets folder:
```bash
mv Leak-k.jpg assets/img/Leak-k.jpg
```

### Step 2: Create the Project File

Create `_projects/0_leak-k.md` with the following content:

```markdown
---
layout: page
title: Leak@k
description: A meta-metric evaluation framework to evaluate robustness of LLM unlearning
img: assets/img/Leak-k.jpg
importance: 0
category: research
redirect: https://github.com/OptimAI-Lab/Leak-k
---

Leak@k is a meta-metric evaluation framework designed to evaluate the robustness of LLM unlearning methods. It provides a comprehensive approach to assess how well unlearning techniques remove sensitive information from large language models.
```

### Key Points from This Example:

- **importance: 0** - This makes Leak@k appear as the **first project** (left upper position) since lower importance values appear first
- **redirect** - Links directly to the GitHub repository when clicked
- **img** - The thumbnail image stored in `assets/img/`

## Ordering Projects

Projects are sorted by the `importance` field:
- Lower numbers appear first (left upper position)
- Existing projects use importance values 1-6
- To make a new project appear first, use importance: 0

## Homepage Sampled Projects

The homepage displays 3 sampled projects from the Projects page. To manage which projects appear on the homepage:

### Where to Configure

Edit `_pages/about.md` and find the `sampled_projects` section in the frontmatter:

```yaml
sampled_projects:
  enabled: true
  projects: [leak-k, optimization, multiagent]
  show_more_link: true
```

### How Project Slugs Work

The slug is derived from the project filename. For example:
- `_projects/0_leak-k.md` → slug: `leak-k`
- `_projects/1_optimization.md` → slug: `optimization`
- `_projects/2_machine_learning.md` → slug: `machine_learning`
- `_projects/3_multiagent.md` → slug: `multiagent`

### Adding a Project to Homepage

1. Create the project file in `_projects/` folder (see steps above)
2. Determine the slug from the filename (remove the importance number prefix)
3. Edit `_pages/about.md`
4. Add the slug to the `projects` list

**Example**: To add Leak@k and remove the first project:
```yaml
# Before
projects: [optimization, machine_learning, multiagent]

# After (adding leak-k, removing optimization)
projects: [leak-k, machine_learning, multiagent]
```

### Removing a Project from Homepage

Simply remove the slug from the `projects` list in `_pages/about.md`.

### Current Homepage Projects

Currently showing:
1. **leak-k** - A meta-metric evaluation framework to evaluate robustness of LLM unlearning
2. **optimization** - Large-Scale Optimization
3. **multiagent** - Distributed Multi-Agent Systems

## Verifying Your Changes

After adding a project, rebuild the site to verify:

```bash
docker compose up --build
```

Then visit http://localhost:8080/projects/ to see your new project.