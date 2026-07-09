const express = require("express");
const router = express.Router();
const authHeaders = require("../middleware/authHeaders");

const {
  createNotification,
  getNotifications,
  getUnreadCount,
  markNotificationRead,
  markAllNotificationsRead,
} = require("../controllers/notificationController");

router.use(authHeaders);

router.get("/unread-count", getUnreadCount);

router.get("/", getNotifications);

router.post("/", createNotification);

router.patch("/:id/read", markNotificationRead);

router.patch("/read-all", markAllNotificationsRead);

module.exports = router;