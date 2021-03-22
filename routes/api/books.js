const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// will end up matching wiht /api/books
router.route("/").get(bookController.showAll).post(bookController.create);

router.route("/:id").get(bookController.findID).put(bookController.update).delete(bookController.delete);

module.exports = router;