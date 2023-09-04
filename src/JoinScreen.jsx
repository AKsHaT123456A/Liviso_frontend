import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate instead of useHistory
import io from 'socket.io-client';

const serverUrl = 'http://localhost:5000'; // Replace with your server URL
const socket = io.connect(serverUrl);

function JoinScreen() {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const location = useLocation();
  const [shopLink, setShopLink] = useState('');

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const shopLinkParam = params.get('shopLink');
      if (shopLinkParam) {
        setShopLink(shopLinkParam);
      }
    }
  }, [location.search]);

  const joinShop = () => {
    socket.emit('joinShop', shopLink);
    socket.on('notification', (message) => {
      // Handle the owner's response, e.g., show a modal for acceptance/rejection.
      // For simplicity, let's assume the owner accepts the call.
      navigate('/call'); // Use navigate to change routes
    });
  };

  return (
    <div>
      <h1>Join Shop</h1>
      <p>Shop Link: {shopLink}</p>
      <button onClick={joinShop}>Join Shop</button>
    </div>
  );
}

export default JoinScreen;
