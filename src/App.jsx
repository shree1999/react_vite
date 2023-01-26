import UserForm from "./components/UserForm";

const App = () => {
  const onAddUser = () => {
    console.log("clicked");
  };

  return (
    <>
      <h1>This is from react</h1>
      <UserForm onAddUser={onAddUser} />
    </>
  );
};

export default App;
