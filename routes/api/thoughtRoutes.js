const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// localhost:3001/api/thoughts/
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtIdreq_c43c797443ca491ca6a5cd6d05ff04b7
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction)

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction)

module.exports = router;
