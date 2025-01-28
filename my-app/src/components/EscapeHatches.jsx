import CounterUseRef, { AppChatRoom, AppChatRoom1, AppVideoPlayer, FormUseRef } from "./child-components/escape-hatches/UseRef";
import ChatApp from "./child-components/escape-hatches/chat-app/ChatApp";

const EscapeHatches = () => {
  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
        <h1 className="main_heading">Escape Hatches</h1>
        <div style={{ width:"740px",display:"block", textAlign:"left", marginBlock:"20px"}} className="box">
            <h2>useRef Examples</h2><hr/>
            <CounterUseRef /> <hr/>
            <FormUseRef/> <hr/>
            <AppVideoPlayer/> <hr/>
            <AppChatRoom1/> <hr/>
            <AppChatRoom/> <hr/>
            {/* <ChatApp/> <hr/> */}
        </div>


        
    </div>
  )
}

export default EscapeHatches