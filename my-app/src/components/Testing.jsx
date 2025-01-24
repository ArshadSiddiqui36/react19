import EventHandlers from "./child_components/EventHandlers";
import ArrayComponent, {ListRemoving, ShapeEditor, CounterList, ListInserting, ListChanges, BucketList, ListAddDelete , ListAddDeleteEdit} from "./ArrayComponent";

const Testing = () => {
  return (
    <div style={{border:"1px solid #f1f1f1", borderRadius:"8px", margin:"20px 0", padding:"20px"}}>
        <h2 style={{marginTop:"0"}}>Testing Component</h2><hr/>

        <EventHandlers />

        <ArrayComponent />

        <ListRemoving />

        <ListAddDelete />

        <ListAddDeleteEdit />

        <ShapeEditor />

        <CounterList />

        <ListInserting />

        <ListChanges />

        <BucketList />
    </div>
  )
}

export default Testing