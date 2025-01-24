import "./App.css";
import Footer from "./components/Footer/Footer";
import app_img from "./assets/images/2.jpg";
import { useLoaderData } from "react-router-dom";
import User from "./components/User/User";

function Users() {
  const users = useLoaderData();
  console.log(users);
  // state --> data
  // state --> loader
  // use effect
  // fetch --> state set --> set state

  return (
    <div className="flex flex-col text-white justify-center items-center space-y-4 mt-9">
      <h1 className="text-3xl font-bold mt-2">Our Total users is: {users.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
          users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
      {/* <p className="text-xl font-bold">Click on those other Buttons to see all our pages</p> */}
      <img className="rounded-xl mt-2" src={app_img} alt="" />
      <Footer></Footer>
    </div>
  );
}

export default Users;
