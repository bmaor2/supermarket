var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: "rom_market"
})

router.post("/newOrder", (req, res) => {
    let q = "INSERT INTO user_order (user_id, total_price, date_ordered) VALUES (?);"
    const values = [
        req.body.user_id,
        req.body.totalPrice,
        req.body.date_ordered
    ];
    db.query(q, [values], (err, data) => {
        if (err) { return res.status(500).send(err); }
        else {
            let order_id = data.insertId * 1;
            let errors = [];
            for (let i = 0; i < req.body.cart.length; i++) {
                db.query(q, (err, data) => {
                    if(err) errors.push(err);
                    else {
                        q = "INSERT INTO order_info (order_id, product_id, price, quantity) VALUES (?);"
                        const values = [
                            order_id,
                            req.body.cart[i].product_id,
                            req.body.cart[i].price,
                            req.body.cart[i].quantity
                        ];
                        console.log(values);
                        db.query(q, [values], (err, data) => {
                            if (err) {
                                errors.push(err);
                            }
                        })
                    }
                })
            }
            if (errors.length > 0) {
                return res.status(500).send(errors?.join("||||||||||||"));
            }
            else {
                return res.status(200).send("Order completeted.");
            }
        }
    });
});

module.exports = router;
