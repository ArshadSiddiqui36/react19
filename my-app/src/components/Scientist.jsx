import ScientistList from './ScientistList'
import { people } from './scientist-data.js';

export default function Scientist() {

const styles = {
    border:"1px solid #f1f1f1",
    borderRadius:"8px",
    margin:"20px 0",
    padding: "10px 20px",
    alignItems: "start",
    flexDirection: "rows",
    textAlign: "left"
}

const headingStyle = {
    display: "block",
    width: "100%",
    textAlign: "center",
    border: "1px solid #2c2c2c",
    background: "#1f1f1f",
    borderRadius: "8px 8px 0 0",
    margin: "10px 0 0 0",
    paddingBottom: "10px",
  };

  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article style={styles}>
      <h1 style={headingStyle}>Scientists</h1>
      <ScientistList
        title="Chemists"
        people={chemists}
      />
      <ScientistList
        title="Everyone Else"
        people={everyoneElse}
      />
    </article>
  );
}
