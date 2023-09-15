---
layout: recipes
title: "Beef & Cheese Sandwich"
summary: "Easy to Make Sandwich with a Creamy Cheese Sauce and Crisp Fresh Toppings"
date: 2023-09-14T14:13:39-07:00
draft: true
images:
  - 4x3/recipe.jpg
  - 16x9/recipe.jpg
  - 1x1/recipe.jpg
weight: 4 # 1-3 for featured, 4 otherwise

googleReady: false

categories:
  - Sandwich
cuisines:
  - American
equipment:
  - Stovetop
ingredients:
  - All-Purpose Flour
  - Milk
  - Unsalted Butter
  - Salt
  - Pepper
  - Chili Powder
  - Beecher's Flagship Cheese
  - Beecher's Just Jack Cheese
  - Ground Beef
  - Mayonnaise
  - Sandwich Roll
  - Banana Peppers
  - Romaine Lettuce
  - Tomato
  - Red Onion
  
ingredient_sections:
  - Cheese Sauce
  - Sandwich
  - Toppings

"Cheese Sauce":
  ingredient_labels:
    ap_flour: 20 grams of all-purpose flour
    milk: 340 grams of whole milk
    unsalted_butter: 2 tablespoons of unsalted butter
    salt: 1/2 teaspoon of coarse salt
    chili_powder: 1/2 teaspoon of chili powder
    cheese: Block of Beecher's Flagship Cheese
    jack_cheese: About half a block of Beecher's Just Jack Cheese
    shredded_cheese: Shredded cheese
  auto_ingredients:
    - ap_flour
    - milk
    - unsalted_butter
    - salt
    - chili_powder
    - cheese
    - jack_cheese
  ingredient_links:
    ap_flour: All-Purpose Flour
    milk: Milk
    unsalted_butter: Unsalted Butter
    salt: Salt
    chili_powder: Chili Powder
    cheese: Beecher's Flagship Cheese
    jack_cheese: Beecher's Just Jack Cheese
"Sandwich":
  ingredient_labels:
    bread: Sandwich Rolls
    beef: 2 pounds of High Fat ground Beef
    salt: Salt
    black_pepper: Pepper
    mayonnaise: Mayonnaise
    browned_beef: Browned ground beef
    cheese_sauce: Cheese sauce
    cheese_beef: Cheesy beef
    toppings: Toppings
  auto_ingredients:
    - bread
    - beef
    - mayonnaise
    - salt
    - black_pepper
  ingredient_links:
    bread: Sandwich Roll
    beef: Ground Beef
    mayonnaise: Mayonnaise
    salt: Salt
    black_pepper: Pepper
"Toppings":
  ingredient_labels:
    banana_peppers: Banana peppers
    romaine: Romaine lettuce
    tomato: Tomato
    red_onion: Red onion
  auto_ingredients:
    - banana_peppers
    - romaine
    - tomato
    - red_onion
  ingredient_links:
    banana_peppers: Banana Peppers
    romaine: Romaine Lettuce
    tomato: Tomato
    red_onion: Red Onion

instructions:
  - section_name: Prepare Toppings
    ingredient_section: Toppings
    steps:
      - name: Dice Vegetables
        text: Medium dice the vegetables.
        ingredients:
          - tomato
          - red_onion
      - name: Cut Lettuce
        text: Cut the lettuce into strips.
        ingredients:
          - romaine
  - section_name: Cook the Cheese Sauce
    ingredient_section: Cheese Sauce
    steps:
      - name: Shred Cheese
        text: Shred the cheese to get 6 ounces of the Beechers' Flagship Cheese and 4 ounces of Just Jack Cheese, mix.
        ingredients:
          - cheese
          - jack_cheese
      - name: Melt Butter
        text: Melt the butter over medium heat in a saucepan.
        ingredients:
          - unsalted_butter
      - name: Make the White Sauce
        text: Whisk in the flour. Continuously whisk for two minutes. Slowly pour in milk while continuing to whisk.
              Continue cooking while frequently whisking until thick, about 10 minutes. Remove from heat.
        ingredients:
          - ap_flour
          - milk
      - name: Season
        text: Mix in seasonings.
        ingredients:
          - salt
          - chili_powder
      - name: Melt in Cheese
        text: Add the shredded cheese and stir in until melted.
        ingredients:
          - shredded_cheese
  - section_name: Make the Sandwiches
    ingredient_section: Sandwich
    steps:
      - name: Brown the Beef
        text: Brown the ground beef in a large skillet. Season with salt and pepper while cooking. Remove to a heat 
              resistant bowl and keep fat in the skillet.
        ingredients:
          - beef
          - salt
          - black_pepper
      - name: Cheese the Beef
        text: Pour the cheese sauce over the ground beef and mix together. 
        ingredients:
          - browned_beef
          - cheese_sauce
      - name: Toast the Rolls
        text: Open the rolls and lay them flat with the cut side down in the skillet with beef fat. Toast as desired.
        ingredients:
          - bread
      - name: Put It All Together
        text: Spread mayonnaise on the roll. Add the cheesy beef into the roll. Top with toppings.
        ingredients:
          - cheese_beef
          - mayonnaise
          - toppings

yield: 6 servings
prepTime: PT5M
cookTime: PT30M

---

There are lots of beef and cheese sandwiches around. This is my take on the sandwich to make something that's delicious
and easy to make.

The original inspiration for this comes from the Original Mo sandwich from Smiling Moose Deli. I make something similar
using a cheese sauce like what Beecher's puts on their 
[Mac & Cheese](https://beechershandmadecheese.com/blogs/recipes/beechers-worlds-best-mac-cheese).
