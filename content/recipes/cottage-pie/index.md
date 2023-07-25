---
layout: recipes
title: "Cottage Pie"
summary: "Ground beef and veggies in gravy baked with mashed potatoes on top"
date: 2023-02-21T21:05:43-08:00
draft: false
images:
  - 4x3/recipe.jpg
  - 16x9/recipe.jpg
  - 1x1/recipe.jpg
weight: 3
outputs:
  - html
  - cooking

googleReady: true

categories:
  - Dinner
cuisines:
  - British
tags:
  - Beef
equipment:
  - Cast-Iron Skillet
  - Stovetop
  - Oven
ingredients:
  - Ground Beef
  - Bachan's Japanese Barbecue Sauce
  - Onion
  - Celery
  - Carrot
  - Garlic
  - Green Onion
  - Russet Potatoes
  - Sour Cream
  - Unsalted Butter
  - Beef Broth
  - Tomato Paste
  - Fried Onions
  - Frozen Corn
  - Frozen Peas
  - Red Wine
  - Dried Thyme
  - Dried Rosemary

yield: 6 servings
prepTime: PT15M
cookTime: PT1H

ingredient_labels:
  beef: 1 pound of high fat ground beef
  onion: 1 yellow onion
  celery: 3 ribs of celery
  carrot: 2 large carrots
  garlic: 4 cloves garlic
  potato: 2 & 1/2 pounds of russet potatoes (about 4 large potatoes)
  green_onion: Green onion for topping
  sour_cream: 1/2 cup sour cream
  butter: 4 tablespoons unsalted butter at room temperature
  beef_broth: 2 cups beef broth
  tomato_paste: 2 tablespoons tomato paste
  bachan: Bachan's Japanese Barbecue Sauce
  fried_onion: Can of fried onions for topping
  corn: Frozen corn
  pea: Frozen peas
  wine: 1/4 cup of red wine
  thyme: Dried thyme
  rosemary: Dried rosemary
  ap_flour: All-purpose flour
  salt: Salt
  salt_for_beef: 1 teaspoon salt
  pepper: Pepper
  baking_soda: 1/2 teaspoon baking soda
  water: 2 tablespoons water

pantry_ingredients:
  - bachan
  - fried_onion
freezer_ingredients:
  - corn
  - pea
auto_ingredients:
  - ap_flour
  - baking_soda
  - salt
  - pepper
  - thyme
  - rosemary
  - wine
  - beef_broth
  - tomato_paste
  - onion
  - celery
  - carrot
  - garlic
  - potato
  - green_onion
  - sour_cream
  - butter
  - beef
staple_ingredients:
  - water

background_tasks:
  watch_potatoes: Keep an eye on the potatoes to avoid overcooking. Remove from heat and drain if done early.

instructions:
  - section_name: Prepare Mashed Potatoes
    steps:
      - name: Boil Water
        text: Boil salted water in a large pot.
      - name: Boil Potatoes
        text: Peel and cut potatoes into small even pieces and add to boiling water.
        ingredients:
          - potato
        continuing: watch_potatoes
  - section_name: Preparation
    steps:
      - name: Combine Baking Soda and Beef
        text: Mix baking soda and salt into water. Pour over ground beef and mix.
        ingredients:
          - beef
          - salt_for_beef
          - water
          - baking_soda
        background:
          - watch_potatoes
      - name: Dice the Vegetables
        text: Dice the onion and celery. Peel and dice the carrots.
        ingredients:
          - onion
          - celery
          - carrot
        background: 
          - watch_potatoes
      - name: Prepare Garnish
        text: Thinly slice the green onions.
        ingredients:
          - green_onion
        background: 
          - watch_potatoes
      - name: Mince the Garlic
        text: Mince or press the garlic.
        ingredients:
          - garlic
        background: 
          - watch_potatoes
      - name: Preheat the Oven
        text: Set a rack near the top of the oven. Preheat to {{< temp 350 >}}.
        background: 
          - watch_potatoes
      - name: Drain Potatoes
        text: Drain potatoes when soft and ready to mash. Set aside in pot.
  - section_name: Cook Beef & Vegetables
    steps:
      - name: Brown Beef
        text: Brown beef in an oven safe skillet. Remove from pan when done and set aside keeping fat in pan.
      - name: Cook Vegetables
        text: Add onions, carrots, and celery and cook until softened. Add garlic and cook 1 to 2 minutes until fragrant.
  - section_name: Make Gravy
    steps:
      - name: Cook Tomato Paste
        text: Add tomato paste and cook until darkened.
        image: cookedpaste.jpg
        ingredients:
          - tomato_paste
      - name: Deglaze
        text: Deglaze with wine.
        ingredients:
          - wine
      - name: Simmer
        text: Add in broth and cooked beef. Lower heat to maintain a gentle simmer.
        ingredients:
          - beef_broth
      - name: Thicken Gravy
        text: Add flour a bit at a time to thicken. Keep in mind it will continue to thicken as it simmers. Should be about 1/4 cup of flour added. Simmer until gravy is thick.
        image: thickened.jpg
        ingredients:
          - ap_flour
      - name: Add Sauce
        text: Add in about 4 tablespoons of the Bachan's barbecue sauce until desired sweetness and taste is reached.
        ingredients:
          - bachan
      - name: Season
        text: Stir in rosemary and thyme to taste. Add extra salt if needed keeping in mind the Bachan's sauce is very salty.
        ingredients:
          - thyme
          - rosemary
          - salt
  - section_name: Make the Pie
    steps:
      - name: Add Frozen Vegetables
        text: Add in frozen peas and corn until desired ratio.
        image: withfrozenveg.jpg
        ingredients:
          - corn
          - pea
      - name: Mash Potatoes
        text: Mash potatoes with sour cream and butter. Gently warm if needed to melt in butter. Add salt and pepper to taste.
        ingredients:
          - sour_cream
          - butter
          - salt
          - pepper
      - name: Top With Potatoes
        text: Remove skillet from heat. Put mashed potatoes into a piping bag with a wide star tip and pipe over the pie to the edges.
        image: toppedwithpotato.jpg
      - name: Bake
        text: Bake for 30 minutes. Turn on broiler if potatoes need more browning.
        image: browned.jpg
  - section_name: Serve
    steps:
      - name: Garnish & Serve
        text: Let cool for a few minutes before serving. Top with green onions and fried onions.
        ingredients:
          - green_onion
          - fried_onion
---

This recipe works best cooked in a 12 inch cast iron skillet. If that is not available another oven safe skillet can be used, 
or transfer from skillet to an oven safe dish before topping with potatoes.

A lot of instructions in this recipe are not exact, so taste frequently.

Pairs well with a hearty bread and the rest of the red wine not used in the recipe.

The Bachan's sauce can be substituted for Worcestershire sauce if needed. The idea to use Bachan's Japanese barbecue sauce instead of the more traditional Worcestershire sauce comes from [Bachan's recipe](https://bachans.com/blogs/recipes/bachans-cottage-pie). 
I also took inspiration from [Tastes Better From Scratch](https://tastesbetterfromscratch.com/cottage-pie/) for instructions on how to make a traditional cottage pie.
