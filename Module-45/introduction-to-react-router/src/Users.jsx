import "./App.css";
import Footer from "./components/Footer/Footer";
import app_img from "./assets/images/2.jpg";

function Users() {
  return (
    <div className="flex flex-col text-white justify-center items-center">
      <h1 className="text-3xl font-bold">This is Our Users Page!</h1>
      <p className="text-xl font-bold">Click on those other Buttons to see all the pages</p>
      <img className="rounded-xl" src={app_img} alt="" />
      <Footer></Footer>
    </div>
  );
}

export default Users;
