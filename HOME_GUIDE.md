# Managing Home Page

The Home page is controlled by `_pages/about.md`.

## Featured Projects Section

Projects displayed on the Home page are controlled by `sampled_projects`:

```yaml
sampled_projects:
  enabled: true
  projects: [leak-k, optimization, multiagent]  # Project slugs
  show_more_link: true
```

### To Add a Project to Home Page

1. Ensure the project has a `slug` in its frontmatter (e.g., `slug: leak-k`)
2. Add the slug to the `projects` list above

### To Remove a Project from Home Page

Remove the slug from the `projects` list.

## Announcements (News) Section

News items automatically appear from `_news/` folder.

```yaml
announcements:
  enabled: true
  scrollable: true
  limit: 16        # Max items to show
```

### To Change News Limit

Edit the `limit` value.

## Hero Banner

The banner image is at `assets/img/home/banner.jpg`.

To change it:
1. Replace the file with a new image (same filename)
2. Or edit `_sass/_hero-banner.scss` line 22 for a different path

## Open Positions Section

Edit the "Open Positions" markdown section in `_pages/about.md`:

```markdown
## Open Positions

We have **POSITION TYPE** positions available in **RESEARCH AREA**.
If you are interested, please contact [Dr. Hong](mailto:mhong@umn.edu).
```

## Social Links Section

Social links at the bottom of the page are in `_pages/about.md`:

```html
<div class="social-links">
  <a href="https://x.com/OptimAI_LAB" ...>X (Twitter)</a>
  <a href="https://huggingface.co/OptimAI-Lab" ...>Hugging Face</a>
  <a href="https://github.com/OptimAI-Lab" ...>GitHub</a>
</div>
```

## Lab Description

Edit the "Who Are We?" section to update the lab description.

## Navigation Order

The Home page has `nav_order: 1` (first in navigation). This is set in the frontmatter.