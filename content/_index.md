---
# Leave the homepage title empty to use the site title
title: smart-charging.info
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        Charging strategies for electric vehicles
      image:
        filename: welcome.jpg
      text: |
        <div style="text-align: justify"> <br> The website for information and analysis of different electric vehicle charging strategies.<br> For private vehicles, we focus on <b>Battery Lifetime</b>, <b>Electricity Costs</b>, and the impact on the <b>Electricity Grid</b>.<br> For commercial trucks, we focus on charging strategies for <b>Route Planning</b> and <b>Scheduling</b>.</div>
    
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
