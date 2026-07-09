const Notification = require("../models/Notification");

const createNotification = async (notificationData) => {
  return await Notification.create(notificationData);
};

const getUnreadCount = async (tenantId, userId) => {
  return await Notification.countDocuments({
    tenantId,
    read: false,
    $or: [
      { userId: null },
      { userId: userId }
    ]
  });
};

const markNotificationRead = async (id, tenantId, userId) => {
  return await Notification.findOneAndUpdate(
    {
      _id: id,
      tenantId,
      $or: [
        { userId: null },
        { userId: userId }
      ]
    },
    {
      read: true,
      readAt: new Date()
    },
    {
      returnDocument: "after"
    }
  );
};

const markAllNotificationsRead = async (tenantId, userId) => {
  return await Notification.updateMany(
    {
      tenantId,
      read: false,
      $or: [
        { userId: null },
        { userId: userId }
      ]
    },
    {
      read: true,
      readAt: new Date()
    }
  );
};

module.exports = {
  createNotification,
  getUnreadCount,
  markNotificationRead,
  markAllNotificationsRead,
};