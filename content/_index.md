---
# Leave the homepage title empty to use the site title
title: smart-charging.info
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        Smart EV Charging Solutions
      image:
        filename: ''#welcome.jpg
      text: |
        <div style="text-align: justify"> <br> The website for information and analysis of different electric vehicle charging strategies.<br> For private vehicles, we focus on <b>Battery Lifetime</b>, <b>Electricity Costs</b>, and the impact on the <b>Electricity Grid</b>.<br> For commercial trucks, we focus on charging strategies for <b>Route Planning</b> and <b>Scheduling</b>.</div>
    
  - block: portfolio
    id: projects
    content:
      title: Explore Blog Posts on Selected Topics!
      subtitle: ''
      text: ''
      filters:
        # Folders to display content from
        folders:
          - project
        # Only show content with these tags
        tags: []
        # Exclude content with these tags
        exclude_tags: []
        # Which Hugo page kinds to show (https://gohugo.io/templates/section-templates/#page-kinds)
        kinds:
          - page
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
      # Default portfolio filter button
      # 0 corresponds to the first button below and so on
      # For example, 0 will default to showing all content as the first button below shows content with *any* tag
      default_button_index: 0
      # Filter button toolbar (optional).
      # Add or remove as many buttons as you like.
      # To show all content, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the button toolbar, delete the entire `buttons` block.
      buttons:
        - name: All
          tag: '*'
        - name: Private Vehicle
          tag: private vehicle
        - name: Commercial Vehicle
          tag: commercial vehicle
    design:
      columns: '1'
---
