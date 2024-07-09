---
layout: recipes
title: "{{ replace .Name "-" " " | title }}"
summary: ""
date: {{ .Date }}
draft: true
images:
  - 4x3/recipe.jpg
  - 16x9/recipe.jpg
  - 1x1/recipe.jpg
weight: 4 # 1-3 for featured, 4 otherwise

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
