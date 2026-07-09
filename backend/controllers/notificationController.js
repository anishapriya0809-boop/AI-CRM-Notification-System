const Notification = require("../models/Notification");
const {
  createNotification: createNotificationService,
  getUnreadCount: getUnreadCountService,
  markNotificationRead: markNotificationReadService,
  markAllNotificationsRead: markAllNotificationsReadService,
} = require("../services/notificationService");

exports.createNotification = async (req, res) => {
  try {
    const { tenantId, userId } = req;
    const { type, title, body, targetUserId } = req.body;

    if (!type || !title || !body) {
      return res.status(400).json({
        message: "type, title, and body are required",
      });
    }

    const notification = await createNotificationService({
      tenantId,
      userId: targetUserId ?? null,
      type,
      title,
      body,
    });

    return res.status(201).json(notification);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create notification",
      error: error.message,
    });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const { tenantId, userId } = req;

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const notifications = await Notification.find({
      tenantId,
      $or: [
        { userId: null },
        { userId: userId },
      ],
    })
      .sort({
        read: 1,
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    const totalNotifications = await Notification.countDocuments({
      tenantId,
      $or: [
        { userId: null },
        { userId: userId },
      ],
    });

    return res.status(200).json({
      page,
      limit,
      totalNotifications,
      totalPages: Math.ceil(totalNotifications / limit),
      notifications,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch notifications",
      error: error.message,
    });
  }
};

exports.getUnreadCount = async (req, res) => {
  try {
    const count = await getUnreadCountService(req.tenantId, req.userId);
    return res.status(200).json({
      unreadCount: count,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get unread count",
      error: error.message,
    });
  }
};

exports.markNotificationRead = async (req, res) => {
  try {
    const notification = await markNotificationReadService(
      req.params.id,
      req.tenantId,
      req.userId
    );

    if (!notification) {
      return res.status(404).json({
        message: "Notification not found",
      });
    }

    return res.status(200).json(notification);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to mark notification as read",
      error: error.message,
    });
  }
};

exports.markAllNotificationsRead = async (req, res) => {
  try {
    await markAllNotificationsReadService(req.tenantId, req.userId);

    return res.json({ message: "All notifications marked as read" });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to mark all notifications as read",
      error: error.message,
    });
  }
};