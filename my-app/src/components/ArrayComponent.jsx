// Updating Arrays in State
// ============================================

// => Important:
// ----------------------------------------------------------------------------------------
// 	avoid (mutates the array)	                prefer (returns a new array)
// ----------------------------------------------------------------------------------------
// adding	push, unshift	                     |  concat, [...arr] spread syntax (example)
// removing	pop, shift, splice	             |   filter, slice (example)
// replacing	splice, arr[i] = ... assignment	 |   map (example)
// sorting	reverse, sort	                     |   copy the array first (example)
// ----------------------------------------------------------------------------------------
// * Alternatively, you can use Immer which lets you use methods from both columns.

// =====================================
import './style.css';
import { useState } from 'react';
// =====================================

// Adding to an array 
// ============================================
// let nextId = 0;

// export function ListAdding() {
//   const [name, setName] = useState('');
//   const [items, setItems] = useState([]);

//   return (
//     <>
//       <h2>Updating Arrays in State : Adding, Deleting</h2>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         // Append | Put old items at the end
//         setItems([
//         { id: nextId++, name: name },
//         ...items 
//         ]);
//       }}>Add New Item at the Begin | Prepend</button>
//       <button onClick={() => {
//         // Prepend | Put old items at the begin
//         setItems([
//           ...items, 
//           { id: nextId++, name: name }
//         ]);
//       }}>Add New Item at the End | Append</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// ==================================================


// => Improvements: Updated Code with Validation
// ==================================================
let nextId = 0;

export default function ListAddingImproved() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = (isPrepend) => {
    if (name.trim() === '') {
      alert('Name cannot be empty.');
      return;
    }
    const newItem = { id: nextId++, name: name.trim() };
    setItems(isPrepend ? [newItem, ...items] : [...items, newItem]);
    setName(''); // Clear input
  };

  return (
    <div style={{width:"780px", border:"1px solid #f1f1f1", borderRadius:"8px", marginBlock:"20px"}}>
      <h2>Updating Arrays in State: Adding Items</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={() => handleAdd(true)}>Add New Item at the Begin | Prepend</button>
      <button onClick={() => handleAdd(false)}>Add New Item at the End | Append</button>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
// ==================================================

// Removing or Deleting from an array
// ==================================================
let initialItems = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
  
  export function ListRemoving() {
    const [items, setItems] = useState(
      initialItems
    );
  
    return (
      <div style={{width:"780px", border:"1px solid #f1f1f1", borderRadius:"8px", marginBlock:"20px"}}>
        <h2>Removing or Deleting Item from an array</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => {
                setItems(
                  items.filter(a =>
                    a.id !== item.id
                  )
                );
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }  
// ==================================================

// Transforming an array
// ==================================================

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
  
export function ShapeEditor() {
    const [shapes, setShapes] = useState(
      initialShapes
    );
  
    function handleClick() {
      const nextShapes = shapes.map(shape => {
        if (shape.type === 'square') {
          // No change
          return shape;
        } else {
          // Return a new circle 50px below
          return {
            ...shape,
            y: shape.y + 50,
          };
        }
      });
      // Re-render with the new array
      setShapes(nextShapes);
    }
  
    return (
      <div style={{position:"relative", border:"1px solid #f1f1f1", borderRadius:"8px", height:"250px", marginBlock:"20px"}}>
        <h2>Transforming an array</h2>
        <button onClick={handleClick}>
          Move Circles Down!
        </button>
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }} />
        ))}
      </div>
    );
  }  
// ==================================================

// Replacing or Updating items in an array 
// ==================================================
let initialCounters = [
    0, 0, 0
  ];
  
  export function CounterList() {
    const [counters, setCounters] = useState(
      initialCounters
    );
  
    function handleIncrementClick(index) {
      const nextCounters = counters.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c + 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCounters(nextCounters);
    }
  
    return (
    <div style={{width:"780px", border:"1px solid #f1f1f1", borderRadius:"8px", marginBlock:"20px"}}>
      <h2>Replacing or Updating items in an array</h2>
      <ul>
        {counters.map((counter, i) => (
        <li key={i}>
            {counter}
            <button onClick={() => {
            handleIncrementClick(i);
            }}>+1</button>
        </li>
        ))}
        </ul>
      </div>
    );
  }
  
// ==================================================

// Inserting into an array
// ==================================================
let nextId2 = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export function ListInserting() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId2++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div style={{width:"780px", border:"1px solid #f1f1f1", borderRadius:"8px", marginBlock:"20px"}}>
      <h2>Inserting into an array</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ==================================================

// Making other changes to an array
// ==================================================
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
  ];
  
  export function ListChanges() {
    const [list, setList] = useState(initialList);
  
    function handleClick() {
      const nextList = [...list];
      nextList.reverse();
      setList(nextList);
    }
  
    return (
      <div style={{width:"780px", border:"1px solid #f1f1f1", borderRadius:"8px", marginBlock:"20px"}}>
        <h2>Making other changes to an array</h2>
        <button onClick={handleClick}>
          Reverse
        </button>
        <ul>
          {list.map(artwork => (
            <li key={artwork.id}>{artwork.title}</li>
          ))}
        </ul>
      </div>
    );
  }
// ==================================================

// Updating objects inside arrays
// ==================================================
// let nextId = 3;
const initialList2 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export function BucketList() {
  const [myList, setMyList] = useState(initialList2);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
      <h2>Art Bucket List</h2>
      <h3>My list of art to see:</h3>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h3>Your list of art to see:</h3>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul className='art-list'>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

// ==================================================

// => Further Improvements: Updated Code with Validation | Added Deleting Methods with Add Items
// ==================================================
// let nextId4 = 0;

// export function ListAddDelete() {
//   const [name, setName] = useState('');
//   const [items, setItems] = useState([]);

//   const handleAdd = (isPrepend) => {
//     if (name.trim() === '') {
//       alert('Name cannot be empty.');
//       return;
//     }
//     const newItem = { id: nextId4++, name: name.trim() };
//     setItems(isPrepend ? [newItem, ...items] : [...items, newItem]);
//     setName(''); // Clear input
//   };

//   const handleDelete = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <div style={{ width: "780px", border: "1px solid #f1f1f1", borderRadius: "8px", marginBlock: "20px", padding: "16px" }}>
//       <h2>Updating Arrays in State: Adding, Deleting</h2>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter item name"
//         style={{ marginRight: "8px"}}
//       />
//       {/* <button onClick={() => handleAdd(true)}>Add New Item at the Begin | Prepend</button>
//       <button onClick={() => handleAdd(false)}>Add New Item at the End | Append</button> */}
//       <button onClick={() => handleAdd(true)}>Prepend New Item</button>
//       <button onClick={() => handleAdd(false)}>Append New Item</button>
//       <ol style={{ marginTop: "16px" }}>
//         {items.map((item) => (
//           <li key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//             <span>{item.name}</span>
//             <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "8px", color: "red" }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// ==================================================

// Updated
// ==================================================
let nextId4 = 0;

export function ListAddDelete() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = (isPrepend) => {
    if (name.trim() === '') {
      alert('Name cannot be empty.');
      return;
    }
    const newItem = { id: nextId4++, name: name.trim() };
    setItems(isPrepend ? [newItem, ...items] : [...items, newItem]);
    setName(''); // Clear input
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ width: "750px", border: "1px solid #f1f1f1", borderRadius: "8px", marginBlock: "20px", padding: "16px" }}>
      <h2>Updating Arrays in State: Adding & Deleting Items</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        style={{ marginRight: "8px" }}
      />
      <button onClick={() => handleAdd(true)}>Prepend New Item</button>
      <button onClick={() => handleAdd(false)}>Append New Item</button>
      <ol style={{ marginTop: "16px" }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              {index + 1}. &nbsp;{item.name}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "8px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
// ==================================================

// Implemented CRUD Operations
// ==================================================
let nextId5 = 0;

export function ListAddDeleteEdit() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = (isPrepend) => {
    if (name.trim() === '') {
      alert('Name cannot be empty.');
      return;
    }
    const newItem = { id: nextId5++, name: name.trim() };
    setItems(isPrepend ? [newItem, ...items] : [...items, newItem]);
    setName(''); // Clear input
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditingId(id);
    setEditName(itemToEdit.name); // Pre-fill input with current name
  };

  const handleSaveEdit = () => {
    setItems(
      items.map((item) =>
        item.id === editingId ? { ...item, name: editName.trim() } : item
      )
    );
    setEditingId(null);
    setEditName('');
  };

  return (
    <div style={{ width: "750px", border: "1px solid #f1f1f1", borderRadius: "8px", marginBlock: "20px", padding: "16px" }}>
      <h2>Updating Arrays in State: Add, Edit & Delete Items - CURD</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
        style={{ marginRight: "8px" }}
      />
      <button
        onClick={() => handleAdd(true)}
        disabled={!name.trim()}
        style={{ marginRight: "8px" }}
      >
        Prepend New Item
      </button>
      <button
        onClick={() => handleAdd(false)}
        disabled={!name.trim()}
      >
        Append New Item
      </button>
      <ol style={{ marginTop: "16px" }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {editingId === item.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Edit item name"
                  style={{ marginRight: "8px" }}
                />
                <button
                  onClick={handleSaveEdit}
                  disabled={!editName.trim()}
                  style={{ marginRight: "8px", color: "green" }}
                >
                  Save
                </button>
                <button onClick={() => setEditingId(null)} style={{ color: "gray" }}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>
                  {index + 1}. &nbsp;{item.name}
                </span>
                <div>
                  <button
                    onClick={() => handleEdit(item.id)}
                    style={{ marginLeft: "8px", color: "blue" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{ marginLeft: "8px", color: "red" }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
// ==================================================
