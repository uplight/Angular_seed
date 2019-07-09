# Introduction

This test will assess your capabilities within the Angular Framework. As this test is mainly focused on Angular, you are provided with everything else (predefined css, html). The test has been made with Angular 6, as this is the version currently being used at HD.ca. You are free to code however you like, but you will be graded based on the requirements below. Each requirement has points totalling 80. Part marks may be given per a requirement. If your application fails to launch, you will automatically fail and not be considered further. No points will be awarded for any features outside of the requirements. You have 48 hours.

# Startup

Make sure your versions are these or higher: 

node version: >= 9.8.0
npm version: >= 6.2.0

## Run these commands to get started:

npm i
npm run mock-server
npm start

The mock server endpoints include '/products' which will return you a json of all the products, and '/products/:id', which will return you a json of that specific product.

# Instructions

You have been allocated to a project already in progress. Some of the boilerplate for this project has already been done for you. It contains AppModule, CoreModule, SharedModule, and three other Modules that are lazy loaded with routes (/product:id and /products and /landing). The landing page for the app contains a list of links to various products. The ProductsModule (/products) is only there for demonstration purposes (think of it as your mocks) and contains the template code complete with CSS for each product and it’s variation, which corresponds to the data found in db.json. The ProductModule is your main concern and it is where most of your additions will go.

# Requirements

1. When a user clicks on a product from the landing page, the correct product is shown in the product route (5)
2. Makes use of structural directives (such as ngIf or ngFor) to form the DOM (5)
3. Makes use of string interpolation to display the data (5)
4. Implements appropriately partialized components (5)
5. Implements at least one smart component (ie page or containers) to make use of services (5)
6. Implements at least one dumb component(s) for displaying data which is passed via input (5)
7. Formatting (5)
8. Implements json-server for product data (5)

Rxjs / Services
9. Creation of a service to fetch data and return as an observable (5)
10. Implements operators and selectors to map the data accordingly (5)
11. Implements async pipe to input data to components (5)

Ngrx
12. Implements actions (5)
13. Implements reducers (5)
14. Implements effects (5)
15. Implements entity adapter for state creation (5)
16. Implements entity adapter to initialize state (2.5)
17. Implements entity adapter to store state in reducer (2.5)



Results:
"/modules/products/pages/products" is smart component importing service and distributing data to dump components looping through array of products using *ngFor

"/modules/product/pages/product"  is dump components retrieving data from input and display on screen. I implemented some extra functionality in it making it smart in case you want to refresh screen when browsing single product. So it works both ways

"/modules/product/pages/product/product.page.html" has usage ngIf and ngSwitch as well pipe to display rating of each product, async binding product$ Observible to html template, svg url use string interpolation



"modules/core/data-store" one of ways load data from api and cache it for application lifetime use observible and api requests

"modules/core/" contains representing filename rxjs components "reducers, actions, effects, selectors". If data not present in store it is loaded from server once. 

"/modules/product/pages/product-store" I created new url 'product/store/:id' it displays product from Redux store 

On landing page I created second set of ids linked to 'product/store/:id' router.

