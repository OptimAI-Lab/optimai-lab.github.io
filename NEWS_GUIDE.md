# Managing News

## Adding a New News Post

### Step 1: Create News File

Create a new `.md` file in `_news/` folder.

**Naming convention:** `YYYY-MM-short-title.md` (e.g., `2026-05-paper-accepted.md`)

### Step 2: Add Frontmatter

```yaml
---
layout: post
date: 2026-05-26 00:00:00
inline: false          # true = short inline news, false = detailed post
related_posts: false   # show/hide related posts section
---
```

### Step 3: Add Content

```markdown
NEWS CONTENT HERE...

- Bullet points for lists
- [Links](https://example.com) for references
- **Bold** for emphasis

![Image description](assets/img/news/image.png){:width="400px"}
```

### Example: Paper Accepted

```yaml
---
layout: post
date: 2026-05-26 00:00:00
inline: false
related_posts: false
---

Our paper **"Paper Title"** has been accepted at **Conference Name**. Congratulations to the authors!

- [Paper Link](https://arxiv.org/abs/...)
- Code available [here](https://github.com/...)
```

### Example: Short Announcement (inline)

```yaml
---
layout: post
date: 2026-05-26 00:00:00
inline: true
related_posts: false
---

Welcome **New Member** to the lab!
```

## Adding News Images

Place images in `assets/img/news/` folder.

Reference in news post:
```markdown
![Award](assets/img/news/award.png){:width="400px"}
```

## Displaying News on Home Page

News posts automatically appear on the Home page through the `announcements` section.

To control how many appear, edit `_pages/about.md`:

```yaml
announcements:
  enabled: true
  scrollable: true
  limit: 16        # Number of news items to show
```

## News Categories

The news page shows all posts chronologically (newest first). No manual categorization needed.

## Removing News

Simply delete the `.md` file from `_news/` folder.