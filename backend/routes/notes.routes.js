const express = require("express");
const router = express.Router();
const {
    getAllNotes,
    createNotes,
    deleteNotes,
    updateNotes,
} = require("../controllers/notes.controller");

router.route("/notes/new").post(createNotes);
router.route("/notes").get(getAllNotes);
router.route("/notes/:id").delete(deleteNotes);
router.route("/notes/:id").patch(updateNotes);

module.exports = router;
