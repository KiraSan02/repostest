// components/SendNotificationButton.js

import React from 'react';
import axios from 'axios';

const SendNotificationButton = () => {
  const handleSendNotification = async () => {
    try {
      const response = await axios.post('/api/sendNotification', {
        userId: 'user123', // Replace with actual user ID or device token
        message: 'Hello from your application!',
      });

      console.log('Notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <button onClick={handleSendNotification}>
      Send Test Notification
    </button>
  );
};

export default SendNotificationButton;
