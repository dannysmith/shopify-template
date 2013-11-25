# Shopify Theme


## Setup

To download and set up:
````
git clone https://github.com/dannysmith/shopify-template
bundle install
bourbon install --path scss/ && neat install --path scss/
theme configure <API_KEY> <PASSWORD> <STORE_URL>
````
See [here](https://github.com/Shopify/shopify_theme) for more information on configuring shopify_theme.

Then to compile/run:
````
guard
````

# Updating the Libraries

````
bourbon update --path scss/
neat update --path scss/
````

# TODO

- Style the header
- Add Menu & Style
- Add the Slider & Style
- Add the Featured Product & style
- Add Breadcrumbs & style

- Style product Grid
- Add product Page and style