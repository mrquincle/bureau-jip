---
layout: page
title: Blog
permalink: /blog/
image: blog_page.jpg
image2: blog_page2.jpg
image-position: right
---

<section class="gray mini-wrap">
        <div class="container">
                <div class="row">
                        {% assign posts_collate = site.posts %}
                        {% include JB/posts_collate %}
                </div>
        </div>
</section>

