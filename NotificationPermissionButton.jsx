// components/NotificationPermissionButton.js

import React from 'react';

const NotificationPermissionButton = () => {
  const handleRequestPermission = () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  };

  return (
    <button onClick={handleRequestPermission}>
      Request Notification Permission
    </button>
  );
};

export default NotificationPermissionButton;
