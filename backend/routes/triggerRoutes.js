const express = require("express");

const router = express.Router();

const {
  inviteMember,
  creatorReplied,
} = require("../controllers/triggerController");

router.post("/invite-member", inviteMember);

router.post("/creator-replied", creatorReplied);

module.exports = router;