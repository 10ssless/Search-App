const express = require("express");
const axios = require("axios");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.send("API is working properly");
});

router.get("/quotes", (req, res, next) => {
    const { limit } = req.query
    axios.get("http://quote-garden.herokuapp.com/api/v2/quotes",{
        params: { limit }
    })
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;