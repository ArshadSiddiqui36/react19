import { useState, useRef, useEffect, useMemo } from 'react';
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
// import { useState, useRef } from 'react';

export function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h2>Time passed: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
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
// import { useRef } from 'react';

export function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  // function handleScrollToThirdCat() {
  //   thirdCatRef.current.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest',
  //     inline: 'center',
  //   });
  // }

  function handleScrollToThirdCat() {
    if (thirdCatRef.current) {
      thirdCatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });

      // Add highlight class
      thirdCatRef.current.classList.add('highlight');

      // Remove highlight after 2 seconds
      setTimeout(() => {
        thirdCatRef.current.classList.remove('highlight');
      }, 2000);
    }
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>
      <div className='scroll-image'>
        <ul>
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
// Highligh Curent and add/remove class for Current
// ==================================================================================
// ===============| Method 1 (Inline Styles) – Quick, but not reusable |==================
// function handleScrollToThirdCat() {
//   if (thirdCatRef.current) {
//     thirdCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center',
//     });

//     // Add a highlight effect
//     thirdCatRef.current.style.outline = '3px solid red';
//     thirdCatRef.current.style.transition = 'outline 0.3s ease-in-out';

//     // Remove highlight after 2 seconds
//     setTimeout(() => {
//       thirdCatRef.current.style.outline = 'none';
//     }, 2000);
//   }
// }
// =============| Method 2 (CSS Class) – More flexible and maintainable. |=============
// function handleScrollToThirdCat() {
//   if (thirdCatRef.current) {
//     thirdCatRef.current.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center',
//     });

//     // Add highlight class
//     thirdCatRef.current.classList.add('highlight');

//     // Remove highlight after 2 seconds
//     setTimeout(() => {
//       thirdCatRef.current.classList.remove('highlight');
//     }, 2000);
//   }
// }
// ===============| Style.css |==================
// .highlight {
//   outline: 3px solid red;
//   transition: outline 0.3s ease-in-out;
// }
// ==================================================================================

// How to manage a list of refs using a ref callback
// ==================================================================================
// import { useRef, useState } from "react";

// export function AppCatFriends() {
//   const itemsRef = useRef(null);
//   const [catList, setCatList] = useState(setupCatList);

//   function scrollToCat(cat) {
//     const map = getMap();
//     const node = map.get(cat);
//     node.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "center",
//     });
//   }

//   function getMap() {
//     if (!itemsRef.current) {
//       // Initialize the Map on first usage.
//       itemsRef.current = new Map();
//     }
//     return itemsRef.current;
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={() => scrollToCat(catList[0])}>Neo</button>
//         <button onClick={() => scrollToCat(catList[5])}>Millie</button>
//         <button onClick={() => scrollToCat(catList[9])}>Bella</button>
//       </nav>
//       <div className='scroll-image'>
//         <ul>
//           {catList.map((cat) => (
//             <li
//               key={cat}
//               ref={(node) => {
//                 const map = getMap();
//                 map.set(cat, node);

//                 return () => {
//                   map.delete(cat);
//                 };
//               }}
//             >
//               <img src={cat} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// function setupCatList() {
//   const catList = [];
//   for (let i = 0; i < 10; i++) {
//     catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
//   }

//   return catList;
// }
// ==================================================================================

// Highligh Curent and add/remove class for Current
// ==================================================================================
// export function AppCatFriends() {
//   const itemsRef = useRef(null);
//   const [catList, setCatList] = useState(setupCatList);

//   function scrollToCat(cat) {
//     const map = getMap();
//     const node = map.get(cat);
//     if (node) {
//       node.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center",
//       });
  
//       // Add highlight class
//       node.classList.add("highlight");
  
//       // Remove highlight after 2 seconds
//       setTimeout(() => {
//         node.classList.remove("highlight");
//       }, 2000);
//     }
//   }

//   function getMap() {
//     if (!itemsRef.current) {
//       // Initialize the Map on first usage.
//       itemsRef.current = new Map();
//     }
//     return itemsRef.current;
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={() => catList[0] && scrollToCat(catList[0])}>Neo</button>
//         <button onClick={() => catList[5] && scrollToCat(catList[5])}>Millie</button>
//         <button onClick={() => catList[9] && scrollToCat(catList[9])}>Bella</button>
//       </nav>
//       <div className='scroll-image'>
//         <ul>
//           {catList.map((cat) => (
//             <li
//               key={cat}
//               ref={(node) => {
//                 const map = getMap();
//                 map.set(cat, node);

//                 return () => {
//                   map.delete(cat);
//                 };
//               }}
//             >
//               <img src={cat} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// function setupCatList() {
//   const catList = [];
//   for (let i = 0; i < 10; i++) {
//     catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
//   }

//   return catList;
// }
// ==================================================================================

// Improved Code
// ==================================================================================
// import { useState, useRef, useMemo } from "react";

export function AppCatFriends() {
  const itemsRef = useRef(new Map());
  const catList = useMemo(setupCatList, []);
  const [activeCat, setActiveCat] = useState(null);

  function scrollToCat(cat) {
    const node = itemsRef.current.get(cat);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      // Update the currently active cat
      setActiveCat(cat);
    }
  }

  return (
    <>
      <nav>
        <button disabled={!catList[0]} onClick={() => scrollToCat(catList[0])}>
          Neo
        </button>
        <button disabled={!catList[1]} onClick={() => scrollToCat(catList[1])}>
          Meo
        </button>
        <button disabled={!catList[5]} onClick={() => scrollToCat(catList[5])}>
          Millie
        </button>
        <button disabled={!catList[9]} onClick={() => scrollToCat(catList[9])}>
          Bella
        </button>
      </nav>
      <div className="scroll-image">
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                if (node) {
                  itemsRef.current.set(cat, node);
                } else {
                  itemsRef.current.delete(cat);
                }
              }}
              className={activeCat === cat ? "highlight" : ""}
            >
              <img src={cat} alt="A cute cat" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  return Array.from({ length: 10 }, (_, i) => `https://loremflickr.com/320/240/cat?lock=${i}`);
}
// ==================================================================================
