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
ingredients:
  - ingredient

ingredientLabels:
  key: label

yield: 2 servings
prepTime: PT0M
cookTime: PT0M

meatIngredients:
  - meat
produceIngredients:
  - produce
eggAndDairyIngredients:
  - eggs
  - milk
  - butter
pantryIngredients:
  - pantry
freezerIngredients:
  - frozen
alcoholIngredients:
  - alcohol
spiceAndSeasoningIngredients:
  - spice
stapleIngredients:
  - oliveOil
  - flour
  - salt
  - pepper

backgroundTasks:
  name: instructions

instructions:
  - sectionName: Make Something
    steps:
      - name: Step Name
        text: Do the thing.
        image: image.jpg
        ingredients:
          - ingredientLabel
---

Some helpful hints and other information. Include any inspirations.
