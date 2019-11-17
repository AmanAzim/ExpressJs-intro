const express = require('express');
const path = require('path');
const router = express.Router();//makes the middleware exportable

const rootDir = require('../util/path');


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
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

module.exports = router;