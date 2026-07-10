import {
  FiUsers,
  FiMessageCircle,
  FiBriefcase,
  FiBell,
  FiFileText,
} from "react-icons/fi";

const notifications = [
  {
    id: 1,
    title: "New Team Member Joined",
    message: "Sarah joined the Marketing Team.",
    category: "Team",
    time: "3h ago",
    read: false,
    icon: FiUsers,
  },
  {
    id: 2,
    title: "Creator Replied",
    message: "Nike campaign discussion updated.",
    category: "Message",
    time: "5h ago",
    read: false,
    icon: FiMessageCircle,
  },
  {
    id: 3,
    title: "Deal Signed",
    message: "Apple deal has been signed.",
    category: "Deal",
    time: "Yesterday",
    read: true,
    icon: FiBriefcase,
  },
  {
    id: 4,
    title: "Campaign Started",
    message: "Spotify campaign is now live.",
    category: "Campaign",
    time: "2 Days Ago",
    read: true,
    icon: FiBell,
  },
  {
    id: 5,
    title: "Monthly Report Ready",
    message: "Performance report generated.",
    category: "Report",
    time: "3 Days Ago",
    read: true,
    icon: FiFileText,
  },
];

export default notifications;