import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
    const style = `
      .avatar {
          border: 1px solid #f1f1f1;
          border-radius: 50%;
      }`;
  
    return (
      <>
        <style>{style}</style>
        <img
          className="avatar"
          src={getImageUrl(person, size)}
          alt={person.name}
          width={size}
          height={size}
        />
      </>
    );
  }