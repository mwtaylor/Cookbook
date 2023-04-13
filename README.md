# Add Structured Data for Google Search Results and Guided Recipes
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

# Avoid committing personal information in images
It is recommended when adding images to verify you don't accidentally 
commit an image with GPS information. Run this command to check:

`npm run no-gps-in-images`