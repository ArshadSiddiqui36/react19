

const EventHandlers = () => {
    
  return (
    <>
        {/* Inline Event Handler */}
        <InlineEventsHandler />

        {/* External Event Handler with Props */}
        <ExternalEventHandler />
        <Buttons />
        {/* <Toolbar /> */}
        <Main />

        {/* Propagation */}
        <h3>Event Propagation - Click on Button & wrapper Box to see the effect</h3>
        <Buttons2 />
        {/* Propagation Stopping Events */}
        <h3>Stopping Event Propagation - Click on Button & wrapper Box to see the effect</h3>
        <Buttons3 />

        {/* Preventing Default Behavior */}
        <h3>Preventing Default Behavior of Browser</h3>
        Default Behavior : <Signup />
        Prevented Default Behavior : <SignupPrevent />


        
    </>
  )
}

export default EventHandlers;


// Inline Event Handler
// ============================================================================
function InlineEventsHandler () {
    return (
        <>
            {/* Normal Function Event Handler */}
             <button onClick={ function handleClick() { 
                // Block Code
                    alert('You clicked inline normal function event handler!');
                }}>
                Click Me
            </button>
            
            {/* Arrow Function Event Handler - Block & Inline Code */}
            <button onClick={ () =>  {
                // Block Code
                    alert('You clicked arrow function event handler - block code!');
                }}>
                Click Me
            </button>
            <button onClick={ () =>  alert('You clicked arrow function event handler - inline code!') }>Click Me</button>
        </>
    )
}
// ============================================================================

// External or As Props Event Handler | Passing event handlers as props
// ============================================================================
function Button1 ({label, handleClick}) {
    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}

function ExternalEventHandler () {

    const handleClick = () => {
        // Code block
        alert('You clicked external or as props event handler!');
    }

    return (
        <>
            <Button1 handleClick={handleClick} label="Click Me" />
            <Button1 handleClick={() => handleClick()} label="Click Me" />
        </>
    )
}

// ============================================================================
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            {/* Play "{movieName}" */}
            `Play ${movieName}`
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function Buttons() {
    return (
        <div style={{paddingBlock:"20px"}}>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}
// ============================================================================


// Reading Props in Event Handlers 
// ============================================================================
function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
}
  
function Toolbar() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
}
// ============================================================================

// Naming Event Handler Props
// ============================================================================
function Button2({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
        {children}
        </button>
    );
}

function Main() {
    return (
        <div>
        <Button2 onSmash={() => alert('Playing!')}>
            Play Movie
        </Button2>
        <Button2 onSmash={() => alert('Uploading!')}>
            Upload Image
        </Button2>
        </div>
    );
}

// ============================================================================
// export default function App() {
//     return (
//       <Toolbar
//         onPlayMovie={() => alert('Playing!')}
//         onUploadImage={() => alert('Uploading!')}
//       />
//     );
//   }
  
//   function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//       <div>
//         <Button onClick={onPlayMovie}>
//           Play Movie
//         </Button>
//         <Button onClick={onUploadImage}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }
  
//   function Button({ onClick, children }) {
//     return (
//       <button onClick={onClick}>
//         {children}
//       </button>
//     );
//   }

// Event propagation
// ============================================================================
function Buttons2() {
    return (
      <div className="card" style={{background:"#505050", borderRadius:"8px", marginTop:"5px"}} onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }

// Stopping propagation (e.stopPropagation())
// ============================================================================
function Button3({ onClick, children }) {
    return (
        <button onClick={e => {
        e.stopPropagation();
        onClick();
        }}>
        {children}
        </button>
    );
}
  
function Buttons3() {
    return (
        <div className="card" style={{background:"#505050", borderRadius:"8px", marginTop:"5px"}} onClick={() => {
        alert('You clicked on the toolbar!');
        }}>
        <Button3 onClick={() => alert('Playing!')}>
            Play Movie
        </Button3>
        <Button3 onClick={() => alert('Uploading!')}>
            Upload Image
        </Button3>
        </div>
    );
}

// ============================================================================
// {/* <div onClickCapture={() => { /* this runs first */ }}>
//   <button onClick={e => e.stopPropagation()} />
//   <button onClick={e => e.stopPropagation()} />
// </div> */}
// ===================
// function Button({ onClick, children }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onClick();
//       }}>
//         {children}
//       </button>
//     );
//   }
// ============================================================================

// Preventing default behavior 
// ============================================================================
function Signup() {
    return (
        <form onSubmit={() => alert('Submitting!')}>
        <input style={{padding:"12px", borderRadius:"8px"}}/>
        <button>Send</button>
        </form>
    );
}

// Preventing
function SignupPrevent() {
    return (
        <form onSubmit={e => {
        e.preventDefault();
        alert('Submitting!');
        }}>
        <input style={{padding:"12px", borderRadius:"8px"}}/>
        <button>Send</button>
        </form>
    );
}
// ============================================================================
// Note:
// * e.stopPropagation() stops the event handlers attached to the tags above from firing.
// * e.preventDefault() prevents the default browser behavior for the few events that have it.






