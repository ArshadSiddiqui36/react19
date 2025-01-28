// Import
import ManageState, { FeedbackForm, Menu, TravelPlan } from "./child-components/ManageState"
import ManageStateComponents, {Accordion, CounterApp, ManageStateForm, ManageStateForm2, Messenger } from "./child-components/ManageStateComponents"
import ManageStateUseReducer, { Counter, TaskApp } from "./child-components/ManageStateUseReducer";
import App from "./child-components/context-component/App";
import App2 from "./child-components/context-component/App2";
import TaskApp2 from "./child-components/context-reducer/TaskApp2";

const ManagingSate = () => {
  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
        <h1 className="main_heading">Managing State</h1>

        <ManageStateComponents />

        <ManageStateForm />
        <ManageStateForm2 />
        
        <FeedbackForm />
        <ManageState />
        <Accordion />
        <Messenger />
        <hr/>
        <Menu/>
        <div style={{height:"400px", overflowY:"scroll", display:"block"}} className="box">
            <TravelPlan />
        </div>
        <div style={{display:"block", textAlign:"left", marginBlock:"20px"}} className="box">
            <CounterApp/>
        </div>
        <hr/>

        <ManageStateUseReducer />
        <Counter />
        <hr/>
        <TaskApp />
        <hr/>
        <div style={{display:"block", textAlign:"left", marginBlock:"20px"}} className="box">
        <h2>createContext, useContext</h2>
            <App />
        </div>
        <div style={{ width:"740px",display:"block", textAlign:"left", marginBlock:"20px"}} className="box">
        <h2>createContext, useContext</h2>
            <App2 />
        </div>

        <div style={{ width:"740px",display:"block", textAlign:"left", marginBlock:"20px"}} className="box">
        <h2>Reducer & Context - useReducer, createContext, useContext</h2><hr/>
            <TaskApp2 />
        </div>
        
    </div>
  )
}

export default ManagingSate