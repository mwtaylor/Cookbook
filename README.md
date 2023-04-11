It is recommended to set up your local Git hooks for this package to avoid
accidentally committing an image with GPS information. Add the following line
to the end of the pre-commit hook:

`npm run no-gps-in-images`