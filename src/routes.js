const router = require('express').Router();

const Shortener = require('./Controllers/ShortenerController');

// -> Home Page
router.get("/", (req,res) => {
    return res.send('¯\\_(ツ)_/¯')
})

// -> Shortener
router.post("/", Shortener.create);
router.get("/:shortcode", Shortener.find);

module.exports = router;