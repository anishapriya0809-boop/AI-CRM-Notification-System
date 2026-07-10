import NotificationCard from "./NotificationCard";

function NotificationList({ notifications, onRead }) {

  const today = notifications.filter((n) =>
    n.time.includes("h")
  );

  const yesterday = notifications.filter(
    (n) => n.time === "Yesterday"
  );

  const older = notifications.filter(
    (n) =>
      !n.time.includes("h") &&
      n.time !== "Yesterday"
  );

  return (
    <div>

      {today.length > 0 && (
        <>
          <h3 className="section-title">TODAY</h3>

          {today.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onRead={onRead}
            />
          ))}
        </>
      )}

      {yesterday.length > 0 && (
        <>
          <h3 className="section-title">YESTERDAY</h3>

          {yesterday.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onRead={onRead}
            />
          ))}
        </>
      )}

      {older.length > 0 && (
        <>
          <h3 className="section-title">OLDER</h3>

          {older.map((item) => (
            <NotificationCard
              key={item.id}
              notification={item}
              onRead={onRead}
            />
          ))}
        </>
      )}

    </div>
  );
}

export default NotificationList;