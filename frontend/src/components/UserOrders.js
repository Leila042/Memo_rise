import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserOrders = ({ userId, token }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/orders/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(response.data.orders);
      } catch (err) {
        setError(err.response.data.message);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId, token]);

  return (
    <div>
      <h2></h2>
      {error ? <p>{error}</p> : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Total: {order.total_price} € - Statut: {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserOrders;
