

const EventHandlers = () => {
    
  return (
    <>
        {/* Inline Event Handler */}
        <InlineEventsHandler />

        {/* External Event Handler with Props */}
        <ExternalEventHandler />
        <Buttons />
        {/* <Toolbar /> */}

        
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


