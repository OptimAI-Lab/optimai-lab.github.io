# Managing Activities

The Activities page is manually maintained in `_pages/activity.md`.

## Adding a New Activity

### Step 1: Add Photo

Place photos in `assets/img/activities/` folder.

**Naming convention:** Descriptive name (e.g., `Conference_2026.png`)

### Step 2: Edit the Page

Open `_pages/activity.md` and add a new section:

```html
<div class="row activity-row" style="margin-top: 30px;">
<div class="col-sm-12">
<img src="{{ '/assets/img/activities/PHOTO.png' | relative_url }}" class="img-fluid rounded" alt="DESCRIPTION" style="max-width: 100%; height: auto;">
<p class="activity-caption"><b>DATE</b>, DESCRIPTION</p>
</div>
</div>
```

### Example: Single Photo

```html
<div class="row activity-row" style="margin-top: 30px;">
<div class="col-sm-12">
<img src="{{ '/assets/img/activities/NeurIPS_2026.png' | relative_url }}" class="img-fluid rounded" alt="NeurIPS 2026" style="max-width: 100%; height: auto;">
<p class="activity-caption"><b>Dec 2026</b>, Group at NeurIPS 2026</p>
</div>
</div>
```

### Example: Two Photos Side by Side

```html
<div class="row activity-row" style="margin-top: 30px;">
<div class="col-sm-6">
<img src="{{ '/assets/img/activities/photo1.png' | relative_url }}" class="img-fluid rounded" alt="Description 1" style="max-width: 100%; height: auto;">
<p class="activity-caption"><b>DATE</b>, Description 1</p>
</div>
<div class="col-sm-6">
<img src="{{ '/assets/img/activities/photo2.png' | relative_url }}" class="img-fluid rounded" alt="Description 2" style="max-width: 100%; height: auto;">
<p class="activity-caption"><b>DATE</b>, Description 2</p>
</div>
</div>
```

## Removing an Activity

1. Remove the HTML block from `_pages/activity.md`
2. Optionally remove photos from `assets/img/activities/`

## Photo Tips

- **Format:** PNG or JPG
- **Size:** Large photos work well (responsive sizing)
- **Order:** Add new activities at the TOP (most recent first)