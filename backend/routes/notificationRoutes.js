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

router.post("/", createNotification);

router.get("/", getNotifications);

router.get("/unread-count", getUnreadCount);

router.patch("/:id/read", markNotificationRead);

router.patch("/read-all", markAllNotificationsRead);

module.exports = router;