# Delavan Studios

## High level instructions

- Install the Wordpress plugins (provided in a zip file)
- Create API keys on WooCommerce and Stripe
- Create a product on WooCommerce
- Fill in all of the environment variables
- Pull the code from Github and deploy it on the frontend site

## Wordpress Plugins

- [ACF Better Search](https://wordpress.org/plugins/acf-better-search/) - Adds to default WordPress search engine the ability to search by content from selected fields of Advanced Custom Fields plugin.
- [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/) - Customize WordPress with powerful, professional and intuitive fields.
- [Better Search Replace](https://wordpress.org/plugins/better-search-replace/) -A small plugin for running a search/replace on your WordPress database.
- [SVG Support](https://wordpress.org/plugins/svg-support/) - Allows SVG file uploads using the WordPress Media Library uploader.
- [Taxonomy Terms Order](https://wordpress.org/plugins/taxonomy-terms-order/) - Allows to reorder taxonomy terms and child terms using a Drag and Drop Sortable javascript capability.
- [Vercel Deploy Hooks](https://wordpress.org/plugins/vercel-deploy-hooks/) - Adds a deploy hook to Vercel.
- [WooCommerce](https://wordpress.org/plugins/woocommerce/) - An eCommerce toolkit.
- [WooCommerce Gateway Stripe](https://wordpress.org/plugins/woocommerce-gateway-stripe/) - Take credit card payments on your store using Stripe.
- [WPGraphQL](https://wordpress.org/plugins/wp-graphql/) - Exposes your site's GraphQL API.
- [WPGraphQL for ACF](https://github.com/wp-graphql/wp-graphql-acf) - Exposes Advanced Custom Fields Endpoints in WPGraphQL.

## Custom Wordpress Plugins for Delavan Studios

- [delavan-cpt] - Custom Post Types
- [delavan-custom-endpoints] - Custom Endpoints for Forms
- [delavan-post-labels] - Replaces the default post labels with News
- [delavan-tax] - Custom taxonomies
- [delavan-theme-support] - Modifies Wordpress defaults, like turning on the featured image on posts, adding excerpts to pages, removing the "p" element from excerpts, etc.

## Environment variables

When you copy/paste in the .env file, please remove the parantheses.

```
WORDPRESS_GRAPHQL_API_URL=(paste the Wordpress API URL with /graphql at the end)
WORDPRESS_REST_API_URL=(paste the URL of the Wordpress API site)
NEXT_PUBLIC_WORDPRESS_REST_API_URL=(paste the URL of the Wordpress API site)

NEXT_PUBLIC_BASE_URL=(paste the URL of the frontend site, not Wordpress)

# WOOCOMMERCE
WOOCOMMERCE_URL=(paste the Wordpress API URL)
WOOCOMMERCE_KEY=(go into the Wordpress admin, click on WooCommerce, then Settings, then Advanced, then REST API, then Add Key, then paste the key here)
WOOCOMMERCE_SECRET=(go into the Wordpress admin, click on WooCommerce, then Settings, then Advanced, then REST API, then Add Key, then paste the secret here)

# STRIPE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=(paste the Stripe publishable key)
STRIPE_SECRET_KEY=(paste the Stripe secret key)
```



