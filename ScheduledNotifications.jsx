// components/ScheduledNotifications.js

import React, { useEffect } from 'react';

const ScheduledNotifications = ({ timeLimitInHours }) => {
  useEffect(() => {
    const timeLimitInMillis = timeLimitInHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const endTime = Date.now() + timeLimitInMillis;

    const interval = 10 * 60 * 1000; // 10 minutes in milliseconds
    const notificationTimer = setInterval(() => {
      if (Date.now() > endTime) {
        sendNotification("Shame on you!", "Why are you still here? Enough of that!");
        clearInterval(notificationTimer);
      }
    }, interval);

    return () => {
      clearInterval(notificationTimer);
    };
  }, [timeLimitInHours]);

  const sendNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  };

  return (
    <div>
      <p>Scheduled Notifications will start after {timeLimitInHours} hours.</p>
    </div>
  );
};

export default ScheduledNotifications;
