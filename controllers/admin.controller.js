const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/add-product', 
        pageTitle: 'Add Product',
        productCSS: true,
        formsCSS: true,
        activeAdd: true});
  };

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
  };

exports.listProduct = (req, res, next) => {
    const products = Product.fetchAll((products) => {
      res.render('admin/products', { 
        prods: products, 
        pageTitle: 'Admin - Products List', 
        path: '/admin/products'
      });
    });
  };  