const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res, next) {
  const userName = req.body.messageUser;
  const message = req.body.messageText;
  messages.push({ text: message, user: userName, added: new Date() });
  res.redirect('/');
});

module.exports = router;
