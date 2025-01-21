import { useState } from 'react';
import { sculptureList } from './sculpture-data.js';

export default function SculptureGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const headingStyle = {
    display: "block",
    width: "100%",
    textAlign: "center",
    border: "1px solid #2c2c2c",
    background: "#1f1f1f",
    borderRadius: "8px 8px 0 0",
    margin: "0",
    paddingBottom: "10px",
  };

  let sculpture = sculptureList[index];
  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
      <h1 style={headingStyle}>Sculpture Gallery</h1>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{width:"250px", height:"250px", borderRadius:"8px"}}
      />
      {showMore && <p style={{maxWidth:"750px", textAlign:"left"}}>{sculpture.description} <hr/></p>}
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} Details
      </button>
      <button onClick={handlePreviousClick}>
        &#8249; Previous
      </button>
      <button onClick={handleNextClick}>
        Next &#8250;
        {/* &laquo; Previous
        Next &raquo;
        &#8249; Previous Round 
        Next Round &#8250; */}
      </button>
    </div>
  );
}
