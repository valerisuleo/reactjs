const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const Category = require("../models/categories");

const { dbURI } = require("../config/environment");

mongoose.connect(dbURI);

Category.collection.drop();

Category.create([
    {
        categoryName: 'Bread',
        isActive: false,
        subCategory: [
            {
                title: 'Pizza Slice',
                imageUrl: 'https://images.pexels.com/photos/4004463/pexels-photo-4004463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                price: 0.69,
                category: 'Bread',
                inStock: 30
            },
            {
                title: 'Brown Pie',
                imageUrl: 'https://images.pexels.com/photos/3223494/pexels-photo-3223494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 0.25,
                category: 'Bread',
                inStock: 60
            },
            {
                title: 'French Baguette',
                imageUrl: 'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                price: 0.69,
                category: 'Bread',
                inStock: 90
            },
            {
                title: 'Cupcake with Chocolate Cubes',
                imageUrl: 'https://images.pexels.com/photos/1908675/pexels-photo-1908675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                price: 0.49,
                category: 'Bread',
                inStock: 120
            },
            {
                title: 'Double Chocolate Cookie',
                imageUrl: 'https://images.pexels.com/photos/6719/food-sugar-milk-cookie.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 0.39,
                category: 'Bread',
                inStock: 150
            },
            {
                title: 'All Butter Croisssant',
                imageUrl: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 0.37,
                category: 'Bread',
                inStock: 180
            },
        ],
        isDisabled: false,
    },
    {
        categoryName: 'Dairy',
        isActive: false,
        subCategory: [],
        isDisabled: true,
    },
    {
        categoryName: 'Fruits',
        isActive: false,
        subCategory: [],
        isDisabled: true,
    },
    {
        categoryName: 'Seasoning and Spice',
        isActive: false,
        subCategory: [],
        isDisabled: true,
    },
    {
        categoryName: 'Vegetables',
        isActive: false,
        subCategory: [
            {
                title: 'Green Peapods',
                imageUrl: 'https://images.pexels.com/photos/1437587/pexels-photo-1437587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                price: 1.05,
                category: 'Vegetables',
                inStock: 25
            },
            {
                title: 'Mixed Peppers',
                imageUrl: 'https://images.pexels.com/photos/7017/food-peppers-kitchen-yum.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                price: 1.60,
                category: 'Vegetables',
                inStock: 50
            },
            {
                title: 'Organic Carrots',
                imageUrl: 'https://images.pexels.com/photos/3297799/pexels-photo-3297799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 0.95,
                category: 'Vegetables',
                inStock: 75
            },
            {
                title: 'Broccoli',
                imageUrl: 'https://images.pexels.com/photos/4055255/pexels-photo-4055255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 1.09,
                category: 'Vegetables',
                inStock: 100
            },
            {
                title: 'Vine Tomatoes',
                imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                price: 1.45,
                category: 'Vegetables',
                inStock: 125
            }
        ],
        isDisabled: false,
    },
])
    .then(categories => console.log(`${categories.length} categories created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
