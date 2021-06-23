const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    title: { type: String },
    imageUrl: { type: String },
    price: { type: Number },
    category: { type: String },
    inStock: { type: Number }
});

const categorySchema = new mongoose.Schema({
    categoryName: { type: String },
    isActive: { type: Boolean },
    isDisabled: { type: Boolean },
    subCategory: [subCategorySchema]
});

module.exports = mongoose.model('Category', categorySchema);
