var express = require('express');
const { read } = require('fs');
var router = express.Router();
var mysql = require('mysql')

//CRUD for products:

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "rom_market"
})


router.get("/", (req, res) => {
    const q = "SELECT * FROM product";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

router.get("/search", (req, res) => {
    let product = req.query.product;
    if (!product == '') {
        const q = `SELECT * FROM product where product_name like '%${product}%'`;
        db.query(q, (err, data) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.send(data);
        });
    }
    else{
        res.status(400).send("can't search an empty field")
    }
});

router.post("/", (req, res) => {
    const q = "INSERT INTO product (`product_name`, `category_id`,`price`, `img_url`,`description`) VALUES (?)";

    const values = [
        req.body.product_name,
        req.body.category_id,
        req.body.price,
        req.body.img_url,
        req.body.description,
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

router.delete("/:product_id", (req, res) => {
    const productId = req.params.id;
    const q = " DELETE FROM product WHERE product_id = ?";

    db.query(q, [productId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

router.put("/:product_id", (req, res) => {
    const productId = req.params.id;
    const q = "UPDATE product SET `product_name`= ?, `category_id`= ?, `price`= ?, `img_url`= ?, `description`=? WHERE product_id = ?";

    const values = [
        req.body.product_name,
        req.body.category_id * 1,
        req.body.price * 1,
        req.body.img_url,
        req.body.description,
    ];

    db.query(q, [...values, productId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});
module.exports = router;