import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Notification from "../models/Notification.js";

dotenv.config();

const seedNotifications = async () => {
  try {
    await connectDB();

    // Delete old notifications
    await Notification.deleteMany();

    // Insert sample notifications
    await Notification.insertMany([
      {
        tenantId: "agency-1",
        userId: "user-101",
        title: "Deal Approved",
        message: "Nike collaboration moved to Approved stage.",
        type: "deal",
      },
      {
        tenantId: "agency-1",
        userId: "user-101",
        title: "New Message",
        message: "Creator replied to your outreach.",
        type: "message",
      },
      {
        tenantId: "agency-1",
        userId: "user-102",
        title: "Weekly Report",
        message: "Your weekly performance report is ready.",
        type: "report",
      },
      {
        tenantId: "agency-2",
        userId: "user-201",
        title: "System Update",
        message: "CRM system maintenance completed.",
        type: "system",
      },
      {
        tenantId: "agency-2",
        userId: "user-202",
        title: "Deal Completed",
        message: "Adidas campaign has been marked completed.",
        type: "deal",
      }
    ]);

    console.log("✅ Sample notifications inserted successfully!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedNotifications();