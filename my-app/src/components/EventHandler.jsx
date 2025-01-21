// Main/Parent Component & Function
export default function EventHandler() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }

//   Sub/Child Component & Function
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", padding:"20px"}}>
      <h2 style={{marginTop:"-10px"}}>Event-Handler</h2>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }

//   Sub/Child Component & Function
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick} style={{margin:"0 10px"}}>
        {children}
      </button>
    );
  }
  