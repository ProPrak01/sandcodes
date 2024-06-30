import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';
import { useAuth } from "../../context/AuthContext.jsx";
const CommunityChat = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const { state } = useAuth();
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get('https://temp-server-sandcode.vercel.app/api/messages');
      setChat(response.data);
    };
    setUsername(state.user.email);
    // Polling every 5 seconds
    const interval = setInterval(fetchMessages, 5000);
    fetchMessages(); // Initial fetch

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = async () => {
    if (username && message) {
      await axios.post('https://temp-server-sandcode.vercel.app/api/messages', { username, message });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h2>Community Chat</h2>
      <div className="chat-messages">
        {chat.map((msg, index) => (
          <div className='msg' key={index}>
            <strong >{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className='inputChat'
        />
        <button className='sendbut' onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default CommunityChat;
