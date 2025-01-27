import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import RefForm from './components/RefForm/RefForm'
// import HookForm from './components/HookForm/HookForm'

function App() {
  const handleSignUpSubmit = (data) => {
    // e.preventDefault();
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    // e.preventDefault();
    console.log("update profile data", data);
  };

  return (
    <>
      <h1>React Form Master</h1>
      {/* <SimpleForm></SimpleForm>
      <StateFulForm />
      <RefForm /> 
      <HookForm /> */}
      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile Updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
