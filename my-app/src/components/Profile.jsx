import Avatar from './Avatar';
export default function Profile() {

    const profile = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "20px 0",
        padding: "10px",
        border: "1px solid #f1f1f1",
        borderRadius: "8px"
    }

  return (
    <div style={profile}>
      <Avatar
        size={50}
        person={{
          name: "Katsuko Saruhashi",
          imageId: 32,
        }}
      />
      <Avatar
        size={75}
        person={{
          name: "Katherin Shim",
          imageId: 47,
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "Petter Lim",
          imageId: 3,
        }}
      />
      <Avatar
        size={75}
        person={{
          name: "Ketty Lemma",
          imageId: 19,
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: 5,
        }}
      />
    </div>
  );
}
