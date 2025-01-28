import { useState, useRef, useEffect } from 'react';
// ==================================================================================
export default function CounterUseRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
// ==================================================================================

// ==================================================================================
export function FormUseRef() {
    const inputRef = useRef(null);
  
    function handleClick() {
      inputRef.current.focus();
    }
  
    return (
      <>
        <input ref={inputRef} />
        <button onClick={handleClick}>
          Focus the input
        </button>
      </>
    );
  }
  
// ==================================================================================

// ==================================================================================
// import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline width="740px"/>;
}

export function AppVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
// ==================================================================================

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
