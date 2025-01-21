import { getScientistImageUrl } from './utils';

export default function ScientistList({ title, people }) {

    const subHeadingStyle = {
        background: "#1f1f1f", padding: "0 10px"
    };

    const listStyle = {
        display: "block",
        listStyle: "none"
    };

    const itemStyle = {
        // border: "1px solid #1f1f1f",
        background: "#1f1f1f",
        width: "88%",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px 0"
    };


  return (
    <>
      <h2 style={subHeadingStyle}>{title}</h2>
      <ul style={listStyle}>
        {people.map(person =>
          <li style={itemStyle} key={person.id}>
            <img
              src={getScientistImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  );
}