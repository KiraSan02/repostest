// pages/index.js

import React from 'react';
import NotificationPermissionButton from '../components/NotificationPermissionButton';
import ScheduledNotifications from '../components/ScheduledNotifications';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Push Notifications Demo</h1>
      <NotificationPermissionButton />
      <ScheduledNotifications timeLimitInHours={4} /> {/* Example: 4 hours */}
    </div>
  );
};

export default HomePage;
