const express = require("express"),
  router = express.Router();

const {
  questions
} = require('../controllers/quiz.js');

router.route('/view-questions').get(questions);

module.exports = router;