const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/books/saved", bookRoutes);

module.exports = router;