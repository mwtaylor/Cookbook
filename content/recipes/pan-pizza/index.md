---
layout: recipes
title: "Pan Pizza"
summary: "Pizza made in a cast iron pan with a crispy yet soft and bready crust"
date: 2023-03-19T20:20:52-07:00
draft: false
images:
  - 4x3/recipe.jpg
  - 16x9/recipe.jpg
  - 1x1/recipe.jpg
weight: 1
outputs:
  - html
  - cooking

googleReady: false

categories:
  - Pizza
cuisines:
  - American
ingredients:
  - Bread Flour
  - Rapid Rise Yeast
  - Low Moisture Mozzarella
  - Beecher's Just Jack
  - Parmesan
  - Canned Whole Tomatoes
  - Tomato Paste
  - Garlic
equipment:
  - Oven
  - Stovetop
  - Stand Mixer
  - Immersion Blender

yield: 2 servings
prepTime: PT30M
cookTime: PT60M

ingredient_sections:
  - Ingredients
  - Pizza Sauce

"Ingredients":
  auto_ingredients:
    - olive_oil
    - bread_flour
    - salt
    - yeast
    - oil_spray
    - cheese
    - mozzarella
    - parmesan
  staple_ingredients:
    - water
  ingredient_labels:
    bread_flour: 200 grams of bread flour
    salt: 1 teaspoon salt
    yeast: 4 grams of rapid rise yeast (1 teaspoon, about half a packet)
    water: 140 grams of water
    mozzarella: Block of low moisture mozzarella
    cheese: Beecher's Just Jack Cheese
    parmesan: Block of parmesan
    olive_oil_for_dough: 8 grams of olive oil
    olive_oil_for_coating: Olive oil
    olive_oil: Olive oil, 8 grams for the dough, and more for coating the pan
    oil_spray: Vegetable oil spray

"Pizza Sauce":
  auto_ingredients:
    - canned_whole_tomatoes
    - tomato_paste
    - olive_oil
    - garlic
    - basil
    - oregano
    - sugar
    - salt
  ingredient_labels:
    canned_whole_tomatoes: 28 ounce can of whole peeled tomatoes
    tomato_paste: 2 tablespoons of tomato paste
    olive_oil: 2 tablespoons of olive oil
    garlic: 3 to 4 cloves of garlic
    basil: 2 teaspoons dried basil
    oregano: 1 teaspoon dried oregano
    sugar: 1 tablespoon of sugar
    salt: 1 teaspoon of salt

instructions:
  - section_name: Start Dough One Day Early
    ingredient_section: Ingredients
    steps:
      - name: Mix Dry Ingredients
        text: In stand mixer bowl stir together flour, salt, and yeast.
        ingredients:
          - bread_flour
          - salt
          - yeast
      - name: Mix Dough
        text: Warm water between {{< temp 105 >}} to {{< temp 110 >}} and mix into dough along with olive oil using a spatula until
              just combined.
        ingredients:
          - water
          - olive_oil_for_dough
      - name: Knead Dough
        text: Knead the dough with a stand mixer using the dough hook for one to two minutes until it forms into a ball. Sprinkle 
              in small amounts of flour as needed if the dough is too sticky while kneading. 
        ingredients:
          - oil_spray
      - name: Rest Dough
        text: Spray oil into a bowl. Place the dough ball into the bowl. Cover with a lid or plastic wrap and let sit at room
              temperature for 30 minutes. Put in refrigerator for 12 to 24 hours.
  - section_name: Prepare Dough in Pan
    ingredient_section: Ingredients
    steps:
      - name: Warm Dough
        text: Two and a half hours before cooking remove dough from the refrigerator and let sit for 30 minutes.
      - name: Form Dough
        text: Place the dough on a lightly floured surface. Form dough into a tight ball.
      - name: Prepare Pan
        text: Coat cast iron pan with a lot of olive oil. Make sure the sides are coated and there is a thin pool of oil on 
              the bottom.
        ingredients:
          - olive_oil_for_coating
      - name: Press Dough in Pan
        text: Place dough in the pan and spread towards edges with fingers as far as possible. Cover with plastic wrap and 
              let sit 10 minutes.
      - name: Flatten Dough to Edges
        text: Press the dough with your fingers to the edges of the pan. Cover with plastic wrap and rest 90 minutes.
  - section_name: Make Pizza Sauce
    ingredient_section: Pizza Sauce
    steps:
      - name: Mince or Press Garlic
        text: Mince or press cloves of garlic to get 1 tablespoon.
        ingredients:
          - garlic
      - name: Blend Tomatoes
        text: Use an immersion blender to blend canned tomatoes until smooth.
        ingredients:
          - canned_whole_tomatoes
      - name: Cook Garlic
        text: Heat olive oil in a saucepan. Cook garlic for about a minute.
        ingredients:
          - olive_oil
      - name: Cook Spices
        text: Add in basil and oregano, cook for a few seconds then add tomato paste. Cook until paste has darkened.
        ingredients:
          - basil
          - oregano
          - tomato_paste
      - name: Simmer Sauce
        text: Add in blended tomatoes. Stir in salt and sugar. Simmer for about 30 minutes until thickened. Use the immersion
              blender again to smooth the sauce if needed.
        ingredients:
          - salt
          - sugar
  - section_name: Prepare Pizza
    ingredient_section: Ingredients
    steps:
      - name: Preheat Oven
        text: Put rack low in the oven. Set oven to pizza setting if available. Preheat oven to {{< temp 500 >}} while
              resting the dough for another 20 minutes.
      - name: Shred Cheese
        text: Shred a 50/50 mix of mozzarella and Just Jack cheese.
        ingredients:
          - cheese
          - mozzarella
      - name: Remove Air Bubbles
        text: Use your fingers to remove any large air bubbles from the dough. Lift the edges of the dough to release air 
              trapped underneath.
      - name: Add Toppings
        text: Add a thin layer of pizza sauce, being sure to go all the way to the edges. Add a thick layer of shredded cheese 
              and press to edges. Add toppings but don't overload the pizza.
  - section_name: Cook Pizza
    ingredient_section: Ingredients
    steps:
      - name: Bake
        text: Bake the pizza in the oven. Rotate halfway through. Don't worry about crust browning at this point. Remove when 
              the top is browned.
      - name: Brown Crust
        text: Let cool for a few minutes to make it easier to separate the pizza from the sides of the pan. Check the crust 
              with a spatula. Use a table knife if needed to gently separate the pizza from the pan. It will almost always 
              need more browning. Put on stovetop on high heat and cook until crust reaches desired browning.
  - section_name: Serve
    ingredient_section: Ingredients
    steps:
      - name: Cool
        text: Remove the pizza from the pan and cool on a wire rack.
      - name: Cut & Serve
        text: Cut the pizza into 6 slices and serve. Grate fresh parmesan cheese on top.
        ingredients:
          - parmesan

---

This recipe is designed to cook in a 10-inch cast iron pan to make 2 servings. A 12-inch pan can be used for 3 servings.
Add 50% more of all ingredients for a 12-inch pan.

The recipe makes a cheese pizza but other toppings can be added as desired.

**Pepperoni**
  - Thinly slice a high quality pepperoni stick for greasy curled pepperoni cups.

**Bacon & Pimento Cheese**

https://www.lodgecastiron.com/recipe/bacon-pimento-cheese-pizza

  - Replace Jack cheese with pimento cheese
  - Top with crumbled crispy bacon
