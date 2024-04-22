import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js library

const Dashboard = () => {
  // Mock data for counters and user profile trends
  const [counterData, setCounterData] = useState({
    users: 0,
    orders: 0,
    revenue: 0,
  });

  const [userProfileData, setUserProfileData] = useState({
    labels: [],
    datasets: [
      {
        label: 'User Activity',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  // Ref to store the chart instance
  const chartRef = useRef(null);

  // Fetch data from API or mock data
  useEffect(() => {
    // Mock data fetching
    const fetchMockData = () => {
      // Mock counters
      setCounterData({
        users: 1000,
        orders: 500,
        revenue: 10000,
      });

      // Mock user profile data
      setUserProfileData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'User Activity',
            data: [100, 200, 300, 400, 500],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    };

    // Call the mock data fetching function
    fetchMockData();
  }, []);

  // Update chart when userProfileData changes
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the existing chart instance
      chartRef.current = null; // Clear the reference
    }

    if (chartRef.current === null) {
      const ctx = document.getElementById('userProfileChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: userProfileData,
        options: {
          // Your chart options here
        },
      });
    }
  }, [userProfileData]);

  return (
    <div className="dashboard">
      <div className="counters">
        <div className="counter">
          <h2>Users</h2>
          <p>{counterData.users}</p>
        </div>
        <div className="counter">
          <h2>Orders</h2>
          <p>{counterData.orders}</p>
        </div>
        <div className="counter">
          <h2>Revenue</h2>
          <p>${counterData.revenue}</p>
        </div>
      </div>
      <div className="user-profile">
        <h2>User Profile Trends</h2>
        <canvas id="userProfileChart"></canvas>
      </div>
    </div>
  );
};

export default Dashboard;
