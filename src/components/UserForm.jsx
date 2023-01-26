import { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onAddUser();
  };

  return (
    <div>
      <h3>Enter details</h3>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Enter Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Enter Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
