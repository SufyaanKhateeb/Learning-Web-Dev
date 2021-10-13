const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const product = require("../models/productModel");

router.get("/", async (req, res) => {
    try {
        const query = req.query;
        const count = parseInt(query.count) || 10;
        const page = parseInt(query.page) || 1;
        const after = parseInt(query.after);
        let sql = {};
        if (after) {
            sql = {
                where: {
                    id: {
                        [Op.gt]: after,
                    },
                },
            };
        } else {
            sql = {
                offset: count * (page - 1),
            };
        }
        const products = await product.findAll({
            ...sql,
            attributes: ["id", "title", "price", "description", "image"],
            limit: count,
        });
        res.status(200).send({
            count: products.length,
            items: products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: error,
            message: "can not process your request",
        });
    }
});

module.exports = router;
