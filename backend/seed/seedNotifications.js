const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Notification = require("../models/Notification");

dotenv.config();

connectDB();

const notifications = [
  {
    tenantId: "t1",
    userId: null,
    type: "member_invited",
    title: "New team member",
    body: "Sarah joined Nova Talent",
    read: false,
    createdAt: new Date("2026-07-01T09:00:00Z"),
    readAt: null,
  },
  {
    tenantId: "t1",
    userId: "u1",
    type: "new_reply",
    title: "Creator replied",
    body: "Priya Sharma replied to your outreach message",
    read: false,
    createdAt: new Date("2026-07-02T14:30:00Z"),
    readAt: null,
  },
  {
    tenantId: "t1",
    userId: "u1",
    type: "report_ready",
    title: "Report ready",
    body: "Your July campaign report is ready to view",
    read: true,
    createdAt: new Date("2026-06-28T08:00:00Z"),
    readAt: new Date("2026-06-28T10:00:00Z"),
  },
  {
    tenantId: "t2",
    userId: null,
    type: "member_invited",
    title: "New team member",
    body: "James joined Bright Star Agency",
    read: false,
    createdAt: new Date("2026-07-01T09:05:00Z"),
    readAt: null,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Notification.deleteMany();

    await Notification.insertMany(notifications);

    console.log("Seed data inserted successfully.");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();