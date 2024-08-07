---
layout: recipes
title: "Cherry Clafoutis"
summary: "A French Dessert with an Egg Custard Texture and Sweet Baked Cherries"
date: 2023-07-18T21:47:53-07:00
draft: false

lead_image_16x9: 16x9/recipe.jpg
card_image_4x3: 4x3/recipe.jpg

weight: 4 # 1-3 for featured, 4 otherwise

googleReady: false

categories:
  - Dessert
cuisines:
  - French
equipment:
  - Blender
  - Cast-Iron Skillet
  - Oven
tags:
  - Individual
ingredients:
  - Egg
  - Unsalted Butter
  - Half-and-Half
  - Milk
  - All-Purpose Flour
  - Almond Extract
  - Dark Cherries
  - Sugar
  - Powdered Sugar
  - Salt

ingredient_links: &ingredient_links
  egg: Egg
  unsalted_butter: Unsalted Butter
  half_and_half_or_milk: Half-and-Half
  ap_flour: All-Purpose Flour
  flavoring: Almond Extract
  cherry: Dark Cherries
  sugar: Sugar
  powdered_sugar: Powdered Sugar
  salt: Salt

ingredient_labels: &common_ingredient_labels
  batter: Batter
  pitted_cherries: Pitted cherries
  powdered_sugar: Powdered sugar or your favorite crunchy sugar for topping
  while_baking_sugar: Sugar

ingredient_sections:
  - section_title: Ingredients
    section_alternatives:
      - 12-inch
      - 10-inch
      - 5-inch

"12-inch":
  ingredient_labels:
    egg: 6 eggs
    unsalted_butter: 3 tablespoons of unsalted butter
    sugar: 150 grams of sugar and more for topping while baking
    batter_sugar: 150 grams of sugar
    half_and_half_or_milk: 240 grams of half-and-half or whole milk
    ap_flour: 90 grams of all-purpose flour
    salt: 3 grams of salt
    flavoring: 1.5 teaspoons of almond extract
    cherry: About 3 cups of dark cherries
    << : *common_ingredient_labels
  egg_and_dairy_ingredients:
    - half_and_half_or_milk
  spice_and_seasoning_ingredients:
    - flavoring
  auto_ingredients:
    - egg
    - unsalted_butter
    - sugar
    - ap_flour
    - salt
    - cherry
    - powdered_sugar
  ingredient_links: *ingredient_links

"10-inch":
  ingredient_labels:
    egg: 4 eggs
    unsalted_butter: 2 tablespoons of unsalted butter
    sugar: 100 grams of sugar and more for topping while baking
    batter_sugar: 100 grams of sugar
    half_and_half_or_milk: 160 grams of half-and-half or whole milk
    ap_flour: 60 grams of all-purpose flour
    salt: 2 grams of salt
    flavoring: 1 teaspoons of almond extract
    cherry: About 2 cups of dark cherries
    << : *common_ingredient_labels
  egg_and_dairy_ingredients:
    - half_and_half_or_milk
  spice_and_seasoning_ingredients:
    - flavoring
  auto_ingredients:
    - egg
    - unsalted_butter
    - sugar
    - ap_flour
    - salt
    - cherry
    - powdered_sugar
  ingredient_links: *ingredient_links

"5-inch":
  ingredient_labels:
    egg: 1 egg
    unsalted_butter: 1/2 tablespoon of unsalted butter
    sugar: 25 grams of sugar and more for topping while baking
    batter_sugar: 25 grams of sugar
    half_and_half_or_milk: 40 grams of half-and-half or whole milk
    ap_flour: 15 grams of all-purpose flour
    salt: 0.5 grams of salt
    flavoring: 1/4 teaspoons of almond extract
    cherry: About 1/2 cup of dark cherries
    << : *common_ingredient_labels
  egg_and_dairy_ingredients:
    - half_and_half_or_milk
  spice_and_seasoning_ingredients:
    - flavoring
  auto_ingredients:
    - egg
    - unsalted_butter
    - sugar
    - ap_flour
    - salt
    - cherry
    - powdered_sugar
  ingredient_links: *ingredient_links

yields: 
  - 6 servings when cooked in a 12-inch skillet
  - 4 servings when cooked in a 10-inch skillet
  - 1 serving when cooked in a 5-inch skillet
  
prepTime: PT15M
cookTime: PT30M

instructions:
  - section_name: Preparation
    ingredient_section: Ingredients
    steps:
      - name: Preheat oven
        text: Preheat the oven to {{< temperature 375 >}} with the cast iron skillet in the oven on a middle rack and another rack placed below.
      - name: Remove cherry pits
        text: Wash the cherries and remove the pits. An [OXO cherry pitter](https://www.oxo.com/quick-release-multi-cherry-pitter.html)
              works well for this.
        ingredients:
          - cherry
      - name: Blend the batter
        text: Add eggs, sugar, half-and-half, flour, salt, and almond extract in a blender and blend until smooth.
        ingredients:
          - egg
          - batter_sugar
          - half_and_half_or_milk
          - ap_flour
          - salt
          - flavoring
  - section_name: Bake
    ingredient_section: Ingredients
    steps:
      - name: Add everything into pan
        text: Remove the skillet from the oven and melt the butter in the pan. Swirl around to coat the bottom and up the sides.
              Spread out the cherries in the skillet and then pour over the batter.
        ingredients:
          - batter
          - pitted_cherries
          - unsalted_butter
      - name: Bake
        text: Place a baking sheet on the lower rack to catch drips. Put the skillet in the oven and bake for 26 to 30 minutes (about 20 minutes for
              an individual serving). After 20 minutes of baking (15 minutes for an individual serving) sprinkle a thin layer of sugar 
              over the top of the clafoutis. Remove when browned and be careful not to overcook and burn the edges.
        ingredients:
          - while_baking_sugar
      - name: Serve
        text: Allow to cool slightly before serving. Slice into wedges. Top with powdered sugar or a crunchy finishing sugar.
        ingredients:
          - powdered_sugar

---
This should be cooked in a preheated cast iron skillet. It can be made in a 10-inch or a 12-inch skillet. An individual portion can be 
made in a mini 5-inch skillet (be careful to not overfill, the mini skillet is shallow). It doesn't keep well for leftovers so only make 
what will be eaten right away.

Pronounced klah-foo-TEE. Clafoutis is a specific type of flaugnarde made with cherries.

References and inspiration from:
* https://www.lodgecastiron.com/recipe/cherry-clafoutis
* https://www.seriouseats.com/cherry-clafoutis-french-dessert-recipe
* https://www.onceuponachef.com/recipes/cherry-clafoutis.html
