import { useState, useEffect } from "react";
// ==================================================================================
// chat.js
function createConnection1() {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting...');
      },
      disconnect() {
        console.log('❌ Disconnected.');
      }
    };
  }

// App.js
// import { useState, useEffect } from 'react';
// import { createConnection1 } from './chat.js';
export function AppChatRoom1() {
  useEffect(() => {
    const connection = createConnection1();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h2>Welcome to the chat! (check in console)</h2>;
}
// ==================================================================================
function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    };
  }

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h2>Welcome to the {roomId} room!</h2>;
}

export function AppChatRoom() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <ChatRoom roomId={roomId} />
    </>
  );
}

// ==================================================================================

// ==================================================================================
// ==================================================================================
