const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    tenantId: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    body: {
      type: String,
      required: true,
      trim: true,
    },

    read: {
      type: Boolean,
      default: false,
    },

    readAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

module.exports = mongoose.model("Notification", notificationSchema);