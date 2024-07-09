---
layout: recipes
title: "Banana Cardamom Cake"
summary: "Cake Similar to Banana Bread Spiced with Cardamom and Topped with Salted Caramel and Bananas"
date: 2023-09-22T22:25:42-07:00
draft: false

lead_image_16x9: 16x9/recipe.jpg
card_image_4x3: 4x3/recipe.jpg

weight: 4 # 1-3 for featured, 4 otherwise

googleReady: false

categories:
  - Cake
cuisines:
  - American
equipment:
  - Cast-Iron Skillet
  - Oven
  - Stovetop
  - Stand Mixer
ingredients:
  - Sugar
  - Light Brown Sugar
  - Dark Brown Sugar
  - Unsalted Butter
  - Egg
  - Banana
  - Sour Cream
  - Vanilla Extract
  - All-Purpose Flour
  - Cardamom
  - Baking Soda
  - Baking Powder
  - Salt

ingredient_sections:
  - section_title: Cake
    section_alternatives:
      - "8-inch Cake"
      - "10-inch Cake"
      - "12-inch Cake"
  - section_title: Topping
    section_alternatives:
      - "8-inch Topping"
      - "10-inch Topping"
      - "12-inch Topping"
      
"Cake Common": &CAKE_COMMON
  ingredient_links:
    sugar: Sugar
    light_brown_sugar: Light Brown Sugar
    unsalted_butter: Unsalted Butter
    egg: Egg
    banana: Banana
    sour_cream: Sour Cream
    vanilla: Vanilla Extract
    ap_flour: All-Purpose Flour
    cardamom: Cardamom
    baking_soda: Baking Soda
    baking_powder: Baking Powder
    salt: Salt
  auto_ingredients:
    - sugar
    - light_brown_sugar
    - unsalted_butter
    - egg
    - banana
    - sour_cream
    - vanilla
    - ap_flour
    - cardamom
    - salt
    - baking_soda
    - baking_powder
    
"12-inch Cake":
  <<: *CAKE_COMMON
  ingredient_labels:
    sugar: 145 grams of sugar
    light_brown_sugar: 145 grams of light brown sugar
    unsalted_butter: 125 grams of butter at room temperature (9 tablespoons)
    egg: 3 eggs
    banana: 325 grams of mashed banana (about 3 medium bananas)
    sour_cream: 245 grams of sour cream
    vanilla: 1 & 1/2 teaspoons of vanilla extract
    ap_flour: 300 grams of all-purpose flour
    cardamom: 1 & 3/4 teaspoons of cardamom
    baking_soda: 1 teaspoon of baking soda
    baking_powder: 1 teaspoon of baking powder
    salt: 3/4 teaspoons of salt

"10-inch Cake":
  <<: *CAKE_COMMON
  ingredient_labels:
    sugar: 100 grams of sugar
    light_brown_sugar: 100 grams of light brown sugar
    unsalted_butter: 85 grams of butter at room temperature (6 tablespoons)
    egg: 2 eggs
    banana: 225 grams of mashed banana (about 2 medium bananas)
    sour_cream: 170 grams of sour cream
    vanilla: 1 teaspoon of vanilla extract
    ap_flour: 210 grams of all-purpose flour
    cardamom: 1 & 1/4 teaspoons of cardamom
    baking_soda: 3/4 teaspoons of baking soda
    baking_powder: 3/4 teaspoons of baking powder
    salt: 1/2 teaspoons of salt
  
"8-inch Cake":
  <<: *CAKE_COMMON
  ingredient_labels:
    sugar: 65 grams of sugar
    light_brown_sugar: 65 grams of light brown sugar
    unsalted_butter: 55 grams of butter at room temperature (4 tablespoons)
    egg: 2 eggs
    banana: 145 grams of mashed banana (about 1 large banana)
    sour_cream: 100 grams of sour cream
    vanilla: 3/4 teaspoons of vanilla extract
    ap_flour: 135 grams of all-purpose flour
    cardamom: 1 teaspoon of cardamom
    baking_soda: 1/2 teaspoons of baking soda
    baking_powder: 1/2 teaspoons of baking powder
    salt: 1/3 teaspoons of salt
    
"Topping Commom": &TOPPING_COMMON
  ingredient_links:
    unsalted_butter: Unsalted Butter
    dark_brown_sugar: Dark Brown Sugar
    salt: Salt
    banana: Banana
  auto_ingredients:
    - unsalted_butter
    - dark_brown_sugar
    - salt
    - banana

"12-inch Topping":
  <<: *TOPPING_COMMON
  ingredient_labels:
    unsalted_butter: 85 grams of unsalted butter (6 tablespoons)
    dark_brown_sugar: 230 grams of dark brown sugar
    salt: 3/4 teaspoons of salt
    banana: About 3 peeled bananas
    
"10-inch Topping":
  <<: *TOPPING_COMMON
  ingredient_labels:
    unsalted_butter: 60 grams of unsalted butter  (4 tablespoons)
    dark_brown_sugar: 160 grams of dark brown sugar
    salt: 1/2 teaspoons of salt
    banana: About 2 peeled bananas
    
"8-inch Topping":
  <<: *TOPPING_COMMON
  ingredient_labels:
    unsalted_butter: 40 grams of unsalted butter (3 tablespoons)
    dark_brown_sugar: 100 grams of dark brown sugar
    salt: 1/3 teaspoons of salt
    banana: About 1 & 1/2 peeled bananas

yields:
  - 16 servings when cooked in a 12-inch skillet
  - 12 servings when cooked in a 10-inch skillet
  - 8 servings when cooked in a 8-inch skillet
prepTime: PT35M
cookTime: PT1H10M

---

https://www.kingarthurbaking.com/recipes/banana-cardamom-upside-down-cake-recipe
