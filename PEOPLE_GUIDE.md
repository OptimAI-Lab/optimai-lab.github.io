# Managing People

## Adding a New Team Member

### Step 1: Add Profile Photo

Place the photo in `assets/img/people/` folder.

**Naming convention:** Use the person's name (e.g., `John_Doe.jpg`)

### Step 2: Edit the People Page

Open `_pages/profiles.md` and add a card in the appropriate section:

#### Postdoctoral Fellows
Add under `<h2 class="section-title">Postdoctoral Fellows</h2>`:

```html
<div class="col mb-4">
<div class="card">
<img src="{{ '/assets/img/people/PHOTO.jpg' | relative_url }}" class="card-img-top" alt="NAME" style="height: 220px; object-fit: cover; object-position: top;">
<div class="card-body">
<h5 class="card-title"><a href="WEBSITE_URL">NAME</a></h5>
<p class="card-text">RESEARCH AREA</p>
</div>
</div>
</div>
```

#### Current Ph.D. Students
Add under `<h2 class="section-title">Current Ph.D. Students</h2>` (same format as above).

#### Alumni
Add under `<h2 class="section-title">Alumni</h2>`:

```html
<div class="col mb-4">
<div class="card">
<img src="{{ '/assets/img/people/PHOTO.jpg' | relative_url }}" class="card-img-top" alt="NAME" style="height: 220px; object-fit: cover; object-position: top;">
<div class="card-body">
<h5 class="card-title"><a href="WEBSITE_URL">NAME</a></h5>
<p class="card-text">CURRENT POSITION</p>
</div>
</div>
</div>
```

### Step 3: For PI (Principal Investigator)

The PI section is separate at the top. To update PI info, edit the `<div class="pi-profile">` section.

## Removing a Team Member

1. Remove the card HTML block from `_pages/profiles.md`
2. Optionally remove the photo from `assets/img/people/`
3. If moving to Alumni, add a new card in the Alumni section

## Profile Photo Tips

- **Size:** ~220px height works best for cards
- **Format:** JPG or PNG
- **Style:** Professional headshot, object-position: top for face alignment