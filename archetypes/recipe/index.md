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
weight: 2 # Use weight of 1 for featured recipes

googleReady: false

categories:
  - category
cuisines:
  - cuisine
tags:
  - tag
equipment:
  - equipment
ingredients:
  - ingredient

ingredient_labels:
  key: label

meat_ingredients:
  - meat
produce_ingredients:
  - produce
egg_and_dairy_ingredients:
  - eggs
pantry_ingredients:
  - pantry
freezer_ingredients:
  - frozen
alcohol_ingredients:
  - alcohol
spice_and_seasoning_ingredients:
  - spice
staple_ingredients:
  - staple
auto_ingredients:
  - salt

background_tasks:
  name: instructions

instructions:
  - section_name: Make Something
    steps:
      - name: Step Name
        text: Do the thing.
        image: image.jpg
        ingredients:
          - ingredientLabel

yield: 2 servings
prepTime: PT0M
cookTime: PT0M

---

Some helpful hints and other information. Include any inspirations.
