---
title: Express API and Angular AJAX
type: homework
duration: n/a
creator:
    name: Mike Hayden
    city: London
competencies: Programming, Server Applications
---

# Express API with Angular `$http`

## Introduction

We've already covered a lot of ground today, so this lab with give you an opportunity to recap creating an Express API and consuming it with an Angular frontend app.

>**Note:** While it may seem easy to copy-paste today's classwork you will get far more out of this lab by going through your notes and building everything out from scratch

## Part 1: The API

Build out an Express API running on `http://localhost:3000`

There should be no homepage.

Create a RESTful resource for a `property`. You should have the following routes:

| Route  | Method | Path |
|:-------|:-------|:-----|
| Index  | GET    | `/properties` |
| Create | POST   | `/properties` |
| Show   | GET    | `/properties/:id` |
| Update | PUT    | `/properties/:id` |
| Delete | DELETE | `/properties/:is` |

The model should contain the following data:

## - `address: String`
## - `postcode: String`
## - `bedrooms: Number`
## - `bathrooms: Number`
## - `askingPrice: Number`
## - `floorArea: Number`
## - `dateAvailable: Date`
## - `image: String`

You should now create a seeds file with at least 3 properties. **You should not attempt to implement image upload.** Use a link from the web instead.

Once you have built out the API, **you must test it using insomnia before you start the next part.**

## Part 2: The Frontend

Now that you have created your API, create a public folder and add `index.html`, `js/app.js` and `css/style.css` files.

Add Angular to your `index.html` using the CDN link, and display all the properties on the homepage using Angular's `$http` module.

**Remember to include `ng-app` and `ng-controller` to your HTML.**

#### Bonus

- Add a CSS framework and display your properties in a grid.
- Create a form so that you can add new properties to the API using Angular's `$http` module.
- Add a delete button to each property so that you can also remove properties.