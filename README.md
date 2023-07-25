# Command Quick Reference

All Hugo commands should be run using `npx` instead of a locally installed
instance of Hugo.

Some familiarity with Hugo will be beneficial to work in this package but
this readme can help with the most commonly needed information.

[Hugo Documentation](https://gohugo.io/documentation/)

## Run Server Locally

`npx hugo server` to run the server in production mode.

`npx hugo server -D`  to run the server with draft pages enabled.

These commands will print out the localhost URL to copy into a browser.

## Create a New Recipe

`npx hugo new --kind recipe recipes/<recipe-name>`

The files for the new recipe will be in `content/recipes/<recipe-name>`.

# Developing New Recipes

A new recipe starts with running the Hugo new page command that clones the recipe 
template.

The command specifies the URL for the recipe which should be in the format 
`recipes/<recipe-name>`. The recipe name in this command should be specified
in [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case). For example
to make a recipe for Cherry Clafoutis run this command:

`npx hugo new --kind recipe recipes/cherry-clafoutis`

## Recipe Title, Summary, and Description

Specify the recipe title with the `title` key. This should be simple and just enough
words to specify what the recipe is.

The summary is specified with `summary`. The summary should be one sentence that helps
the reader understand what the recipe is.

A longer description of the recipe can be put after the front matter in the content
section of the `index.md` file. This can be as long as you want and include things 
like inspirations for the recipe, the history of the recipe, extra information and
tips to help cook it, or any other information you want to include about the recipe.

## List Ingredients

There are a few steps needed to add the list of ingredients to a recipe. First just
write out the list of ingredients by hand or in Word to define the text label that
will be shown on the site to the reader. Now each ingredient needs a key that 
will be the reference for it in the YAML recipe file. This reference key should be 
in [snake_case](https://en.wikipedia.org/wiki/Snake_case) and should just be the 
name of the ingredient. Don't put any measurements in the key. The key should be
singular, so for eggs it should be `egg` even if there is more than one egg in 
the recipe. 

### Ingredient Categorization

All ingredients on this site will be categorized by type. These types are specified
in the `index.md` front matter using category keys like `egg_and_dairy_ingredients`. 
The ingredients for that category are listed as a YAML list under this key.
The list contains just the reference keys for the ingredient, not the text label.

For example to list eggs using the key defined before:

    egg_and_dairy_ingredients:
      - egg

The available categories are:

* `meat_ingredients`: Chicken, beef, pork, sausage, etc...
* `produce_ingredients`: Fresh produce (don't include things like canned vegetables 
    or dried herbs)
* `egg_and_dairy_ingredients`: Eggs and dairy
* `pantry_ingredients`: Things that would be stored in a pantry like canned food, 
    dried ingredients (pasta and rice), oats, etc...
* `freezer_ingredients`: Frozen ingredients
* `alcohol_ingredients`: Beer, wine, and spirits
* `spice_and_seasoning_ingredients`: Spices and seasonings, also include flavor extracts
* `staple_ingredients`: Staples such as flour, sugar, salt, pepper, and oil

The instructions to add a new category are under the site-wide configuration section.

There is a special category key available called `auto_ingredients`. Put common
ingredient keys under this category to have them be auto-categorized.

Instructions to add new auto-categorized ingredients are under the site-wide 
configuration section.

### Ingredient Labels

The labels that will be shown to readers are specified in the front matter YAML
under the key `ingredient_labels`. This is a map of ingredient key to the string
label that will be shown on the site to readers.

For example to list 2 eggs:

    ingredient_labels:
      egg: 2 eggs

### Separate Ingredients into Sections

For simple recipes the quickest and easiest way to list ingredients is to follow 
the earlier instructions for reference keys and text labels. This puts all 
ingredients in one list on the recipe page.

For more complex recipes the ingredients can be broken up into multiple sections.
Some examples of when you might want to do this:

* A pizza recipe with ingredients separated into sections for dough, sauce, and
    toppings
* A cookie or cake recipe with separate sections for the dough/batter ingredients
    and the frosting/glaze.

To set up the multiple sections add an `ingredient_sections` key to the front matter
and list the names of the sections under it. These names will be shown exactly as 
written on the page to the reader.

    ingredient_sections:
      - Dough
      - Pizza Sauce
      - Toppings

Sections can also be used for alternate ingredient lists. These can be used when
a recipe has multiple size options, or multiple options for toppings or mix-ins.
The reader can only see one of the alternate sections at a time. Alternate sections 
can be defined along with other sections. Alternative sections are also defined 
under `ingredient_sections` but require a little more information. Here's
an example:

    ingredient_sections:
      - section_title: Dough
        section_alternatives:
          - 10-inch Pizza
          - 12-inch Pizza
      - Pizza Sauce
      - section_title: Toppings
        section_alternatives:
          - Pepperoni Pizza
          - Supreme Pizza
          - Hawaiian Pizza

For every section that is defined under `ingredient_sections` you need to add
a new key to the front matter YAML that is the same as the section name. If
the name contains spaces or any special characters then the key needs to be
wrapped in double quotes. Under each of these section keys there needs to be
the `ingredient_labels` and all the categorized ingredients. If sections are
used do not define `ingredient_labels` or ingredient categories at the top
level of the front matter YAML.

    "Pepperoni Pizza":
      auto_ingredients:
        - cheese
        - pepperoni
      ingredient_labels:
        cheese: Mozzarella cheese
        pepperoni: Stick of pepperoni or pre-sliced pepperoni

## Add Images

All images for a recipe need to be provided in three aspect ratios: 1x1, 4x3, and 
16x9. The images should be placed in directories next to the index.md file in the 
recipe directory. The directories should be named `1x1`, `4x3`, and`16x9`.

Every recipe needs at least one image showing the completed dish. This will be the 
main image for the recipe shown throughout the site. It should be named `recipe.jpg`.

While developing a draft there will be a placeholder image if the main image isn't 
added yet. This is ok for drafts but an image needs to be added before publishing
the recipe.

Other images can be added to show details for steps in the recipe. These can be
named anything and referenced when writing the recipe instructions.

### Avoid Committing Personal Information in Images

It is recommended when adding images to verify you don't accidentally
commit an image with GPS information. Run this command to check:

`npm run no-gps-in-images`

Verify the last line of the output from this command is `No GPS information found`.

## Write Recipe Instructions

Instructions should only be included for unique recipes written for this site. 
Do not copy instructions from other sites. When adding a recipe from another
site just reference the link in the text description of the recipe and leave
out the instructions section.

Instructions are broken up into high level sections. Each of these sections
contain a list of individual steps. Even if only one section is desired it 
must be written in the same format, it is not possible to omit sections and
just list steps. Here's an example of a basic recipe:

    instructions:
      - section_name: Preparation
        steps:
          - name: Chop Vegetables
            text: Dice the onion and carrot. Mince the Garlic.
          - name: Cut Meat
            text: Cut the meat into 1-inch cubes.
      - section_name: Cook
        steps:
          - name: Brown the Meat
            text: Brown the meat in a skillet. Remove and set aside.
          - name: Cook Vegetables
            text: Add the vegetables to pan and cook until soft.
          - name: Finish Cooking
            text: Reduce heat and add back meat. Cook until meat is cooked through.
      - section_name: Serve
        steps:
          - name: Serve
            text: Serve in a bowl with rice or pasta.

### Associate Ingredients with Steps

The ingredients can be associated to a step so they are displayed together.
This prevents the need to rewrite the ingredient label in the instruction.

For example a step might say "Add a cup of milk" and there is a listed
ingredient with a label "1 cup of milk". If the author wants to change the
amount to 1/2 cup of milk it must be changed in both places. If instead the
ingredient is associated to the instruction the step can just read "Add the 
milk". Then the ingredient label can be modified without having to worry
about where else it was copied. To do this, add `ingredients` along with the
step `name` and `text` and list the ingredient keys:

        steps:
          - name: Chop Vegetables
            text: Dice the onion and carrot. Mince the Garlic.
            ingredients:
              - onion
              - carrot
              - garlic

It is possible to create new keys and labels for things that are not listed
in the ingredient list. For example when making a pizza with a from scratch
sauce you might want to associate sauce with a step, but it is not an ingredient
in the list.

### Add an Image to a Step

If you want to add an image to show how to perform a step or show what the 
food should look like after the step use the `image` key with the file name.

        steps:
          - name: Brown Meat
            text: Cook the meat on high heat until well browned.
            image: browned_meat.jpg

## Add Additional Recipe Data

Each recipe should have a category such as Dinner, Side-Dish, or Dessert.
It should also have a type of cuisine such as American, French, or Japanese.
Specify these as a list with the category using the `categories` key and 
cuisine using the `cuisines` key (even though these keys are plural and the
value is a list only add one category and one cuisine).

    categories:
      - Dinner
    cuisines:
      - American

Other data about a recipe can be given using lists of multiple values.
Tags are added with the `tags` key and can be used to group similar recipes.
Equipment is added with the `equipment` key and lists major equipment needed
to prepare the recipe. Available equipment types are listed under the 
`content/equipment` directory. 

    tags:
      - Muffin
      - Decorated Dessert
    equipment:
      - Stand Mixer
      - Oven

There is a key `ingredients`. This is used to add major ingredients in the 
recipe that someone might want to search recipes by. It should just be the
name of the ingredient in singular case without any measurements. Only list 
ingredients that could be used for searching. For example someone might
want to make a recipe with cherries, or have some milk they want to use up
so these ingredients should be added. Something such as salt isn't too 
important to search by so it shouldn't be added.

    ingredients:
      - Cherry
      - Milk

Preparation time and cooking time are added using the `prepTime` and
`cookTime` keys. Give the times in ISO8601 duration format.

    prepTime: PT10M
    cookTime: PT1H15M

Give the recipe yield using the `yields` key. This is given as a list. If there 
are multiple potential yields from the recipe add them all in the list. 
Otherwise, add a list with one value.

    yields:
      - 1 Pie
      - 8 Slices

or

    yields:
      - 2 Servings

## Publish the Recipe

To publish the recipe just change `draft: true` to `draft: false`.

## Feature the Recipe on the Homepage

3 recipes can be featured on the homepage. To set this recipe to one of 
the featured recipes change `weight: 4` to a value of 1, 2, or 3. The value
represents the order in the featured recipes. Each weight of 1, 2, or 3 should
only be associated with one recipe at a time. All other recipe should have
a weight of 4.

## Add Structured Data for Google Search Results and Guided Recipes

Recipes can have metadata added for Google to know more about the recipes.
This includes a list of recipes from the main page and recipe details.
The detailed recipes will also have all information needed for guided recipes
on Google Home devices. However, so far I have been unsuccessful in getting
any recipes to work on Google Home.

To add the metadata just flip the googleReady flag on a recipe from false
to true. But first run through this checklist to make sure everything is
in order first:

* Recipe is an original recipe for this site and has listed instructions
* The recipe has a main image in 1x1, 4x3, and 16x9 aspect ratios
* `cookTime` and `prepTime` should be set in PTxM or PTxH format
* `categories` and `cuisines` taxonomies should be set and only have one value
* `tags` should not contain any commas

# Recipe Style Guide

Use this style guide to write recipes in a consistent style across the site.

## Ingredients

Ingredients should be listed as if they are a shopping list. Write the ingredient
as close as possible to how it is purchased.

Good: 1 onion

Bad: 1/2 cup diced onion (Onions are not purchased diced)

Measured ingredients should be written as `Measurement` of `ingredient` in all lower case.

Good: 1/4 teaspoon of vanilla extract

Bad: 1/4 teaspoon vanilla extract (missing 'of' between the measurement and ingredient)

Bad: 1/4 teaspoon of Vanilla Extract (write as all lower case)

If the ingredient does not start with a number capitalize the first letter.
