import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        border: '1px solid #f1f1f1',
        borderRadius: '8px',
        position: 'relative',
        // width: '100vw',
        // height: '100vh',
        width: '820px',
        height: '400px',
        textAlign: 'center',
        lineHeight: '400px',
      }}>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x - (position.x === 0 ? 0 : 552)}px, ${position.y - (position.y === 0 ? 0 : 370)}px)`,
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}
      />
      Move Dot Using Mouse Pointer
    </div>
  );
}
