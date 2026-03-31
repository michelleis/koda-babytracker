import React from 'react';

const CaregiverDashboard = () => {
  return (
    <div className="dashboard caregiver-view">
      <h2>Caregiver Mode</h2>
      
      <div className="summary-card">
        <p>Last Feeding: 2 hours ago</p>
        <p>Last Nap: Ongoing</p>
      </div>

      <div className="log-actions">
        <h3>Record Event</h3>
        <button className="log-btn">🍼 Feed</button>
        <button className="log-btn">💤 Sleep</button>
      </div>
      
      <p className="note">Updates are synced with the Parent in real-time.</p>
    </div>
  );
};

export default CaregiverDashboard;