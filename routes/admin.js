const express = require('express');
const path = require('path');
const routes = express.Router();//makes the middleware exportable

const rootDir = require('../util/path');

const products = [];

routes.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));//For serving static html page
    res.render('add-product', { docTitle: 'Add products', path: '/admin/add-product' });
});

routes.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

/*
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {//handels only get request from the user and sends the form
     res.send(`
        <form action="/admin/add-product" method="post">
            <input type="text" name="productTitle">
            <button type="submit">Add</button>
        </form>
      `);
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log('Request body', req.body);
    res.redirect('/');
});
*/

//module.exports = router;

exports.routes = routes;
exports.products = products;