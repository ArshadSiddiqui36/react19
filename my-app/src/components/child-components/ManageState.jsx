
import { useState } from 'react';
// ======================================================================================
export default function ManageState() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div style={{ width: "750px", border: "1px solid #f1f1f1", borderRadius: "8px", marginBlock: "20px", padding: "16px" }}>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          placeholder='lima is the right answer'
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </div>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
// ========================================================================================================


// => Avoid contradictions in state 
// ========================================================================================================
// import { useState } from 'react';

// export function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setIsSending(true);
//     await sendMessage(text);
//     setIsSending(false);
//     setIsSent(true);
//   }

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }

// ========================================================================================================

export function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <div className='box'>
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
    </div>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

// ========================================================================================================

// Avoid duplication in state 
// ========================================================================================================
// import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

// ========================================================================================================

// Avoid deeply nested state
// ========================================================================================================
// import { useState } from 'react';
// import { initialTravelPlan } from './places.js';

// function PlaceTree({ place }) {
//   const childPlaces = place.childPlaces;
//   return (
//     <li>
//       {place.title}
//       {childPlaces.length > 0 && (
//         <ol>
//           {childPlaces.map(place => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const planets = plan.childPlaces;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planets.map(place => (
//           <PlaceTree key={place.id} place={place} />
//         ))}
//       </ol>
//     </>
//   );
// }

// Improved in data type in places-type2.js file
// ========================================================================================================
// import { useState } from 'react';
// import { initialTravelPlan } from './places-type2.js';

// function PlaceTree({ id, placesById }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               placesById={placesById}
//             />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             placesById={plan}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// Improved in data type in places-type2.js file and added delete button
// =====================================================================================================
import { initialTravelPlan } from './places-type2.js';

export function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    // Create a new version of the parent place
    // that doesn't include this child ID.
    const nextParent = {
      ...parent,
      childIds: parent.childIds
        .filter(id => id !== childId)
    };
    // Update the root state object...
    setPlan({
      ...plan,
      // ...so that it has the updated parent.
      [parentId]: nextParent
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}
// =====================================================================================================
