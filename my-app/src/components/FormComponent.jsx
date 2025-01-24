// Updating Objects in State
import { useState } from 'react';

export default function FormComponent() {

  const Style = `
    .formContainer {
        border: 1px solid #f1f1f1;
        border-radius: 8px;
        margin-block: 25px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    label {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 350px;
        padding-block: 5px;
        // border: 1px solid #f1f1f1;
    }
    input {
        width: 250px;
        padding: 10px;
        border-radius: 5px;
        // border: 1px solid #ccc;
    }
  `;

  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
    <style>{Style}</style>
    <div className="formContainer">
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}

        style={{width:"150px", height:"150px"}}
      />
    </div>
    </>
  );
}
