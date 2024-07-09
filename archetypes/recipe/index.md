---
layout: recipes
title: "{{ replace .Name "-" " " | title }}"
summary: ""
date: {{ .Date }}
draft: true
weight: 4 # 1-3 for featured, 4 otherwise

#lead_image_16x9: 16x9/recipe.jpg
#card_image_4x3: 4x3/recipe.jpg
#opengraph_image_1x1: 1x1/recipe.jpg

googleReady: false

categories:
  - category
cuisines:
  - cuisine
tags:
  - tag
equipment:
  - Stove
ingredients:
  - Salt
  
ingredient_links:
  salt: Salt

ingredient_labels:
  salt: Every recipe needs at least a little salt, right?

auto_ingredients:
  - salt

instructions:
  - section_name: Make Something
    steps:
      - name: Step Name
        text: Do the thing.
        ingredients:
          - salt

yield: 2 servings
prepTime: PT0M
cookTime: PT0M

---

Some helpful hints and other information. Include any inspirations.
