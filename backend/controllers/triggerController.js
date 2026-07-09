const {
  createNotification,
} = require("../services/notificationService");

exports.inviteMember = async (req, res) => {
  try {
    const { tenantId } = req;

    const notification = await createNotification({
      tenantId,
      userId: null,
      type: "member_invited",
      title: "New team member",
      body: "A new team member has joined the organization.",
    });

    return res.status(201).json(notification);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create invite notification",
      error: error.message,
    });
  }
};

exports.creatorReplied = async (req, res) => {
  try {
    const { tenantId, userId } = req;
    const { message } = req.body || {};

    const notification = await createNotification({
      tenantId,
      userId,
      type: "new_reply",
      title: "Creator replied",
      body: message || "The creator replied to your outreach message.",
    });

    return res.status(201).json(notification);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create reply notification",
      error: error.message,
    });
  }
};