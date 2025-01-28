import '../style.css';
import { useState } from 'react';


// =====================================================================================================
export default function ManageStateComponents() {
  return (
    <h2>Managing State Components</h2>
  )
}
// =====================================================================================================
// Sharing state between components 
// =====================================================================================================
export function ManageStateForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}
// =====================================================================================================

// Improved above code => Simplified the code by calculating fullName while the component is rendering
// Preserving and resetting state 
// =====================================================================================================
export function ManageStateForm2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
      <h2>Let’s check you in (Improved above code)</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}
// =====================================================================================================

// Accordion - Sharing State Between Components (Add state to the common parent)
// =====================================================================================================
export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
      <h2> - Accordion - <br/> Sharing State Between Components via Common Parent</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city.<br/> From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples".<br/> In fact, the region surrounding Almaty is thought to be the ancestral home of the apple,<br/> and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p className='paragraph'>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

// =====================================================================================================

// =====================================================================================================
// import { useState } from 'react';
// import Chat from './Chat.js';
// import ContactList from './ContactList.js';

export function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className='wrapper-box'>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      {/* <Chat contact={to} /> */}
      {/* Switching between the recipients resets the input field using below lined that included key attribute */}
      <Chat key={to.email} contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

// ContactList.js
function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact =>
          <li key={contact.email}>
            <button onClick={() => {
              onSelect(contact);
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

// Chat.js
function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

// =====================================================================================================

// Preserving and Resetting State
// =====================================================================================================
// export function CounterApp() {
//   const counter = <Counter />;
//   return (
//     <div>
//       {counter}
//       {counter}
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// Or #######################

// export function CounterApp() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// Or #######################

export function CounterApp() {
  const [showB, setShowB] = useState(true);
  return (
    <div style={{display:"block"}}>
    <h2>Preserving and Resetting State</h2>
      <Counter />
      {showB && <Counter />} 
      <label style={{margin:"0", justifyContent:"flex-start", alignItems:"center"}}>
        <input style={{height:"40px", width:"40px", margin:"0"}}
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div style={{border:"1px solid", alignItems:"center", justifyItems:"center", flexDirection:"column", marginBlock:"10px", borderRadius:"8px", width:"200px"}}
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1 style={{margin:"5px"}}>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

// =====================================================================================================


