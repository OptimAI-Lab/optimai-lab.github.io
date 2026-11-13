---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 6
---

<!-- pages/blog.md : cards are generated from the files in _blogs/, newest first -->
<div class="projects blogs">
  {% assign sorted_blogs = site.blogs | sort: "blog_date" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for blog in sorted_blogs %}
      {% include blogs.liquid %}
    {% endfor %}
  </div>
</div>
