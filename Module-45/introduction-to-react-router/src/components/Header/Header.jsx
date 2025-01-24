import "./Header.css";
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import head_img from '../../../public/react.png';
import '../../App.css';
import Footer from "../Footer/Footer";

const Header = () => {
    const navigation = useNavigation();
  return (
    <div className="space-x-3 text-white">
        <Link to='/' className="inline-flex justify-center items-center">
            <img className="logo rounded-full" src={head_img} alt="logo" />
            <h2 className="text-4xl md:text-7xl font-extrabold text-[#00a6b5] mb-4">React Router</h2>
        </Link>
      <nav>
        {/* // when we add NavLink, it will add active class to the current link */}
        <NavLink to="/home"> 
          <button className="btn btn-outline btn-info" onClick={()=>document.getElementById('home').showModal()}>Home</button>
        </NavLink>
        <dialog id="home" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Home Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <Link to="/users">
          <button className="btn btn-outline btn-success" onClick={()=>document.getElementById('users').showModal()}>Users</button>
        </Link>
        <dialog id="users" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Users Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <Link to="/posts">
          <button className="btn btn-outline btn-primary" onClick={()=>document.getElementById('posts').showModal()}>Posts</button>
        </Link>
        <dialog id="posts" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Posts Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <Link to="/about">
          <button className="btn btn-outline btn-warning" onClick={()=>document.getElementById('about').showModal()}>About</button>
        </Link>
        <dialog id="about" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the About Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <Link to="/contact">
          <button className="btn btn-outline btn-error" onClick={()=>document.getElementById('contact').showModal()}>Contact</button>
        </Link>

        
        <dialog id="contact" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Contact Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        <Link to="/support">
          <button className="btn btn-outline btn-secondary" onClick={()=>document.getElementById('support').showModal()}>Support</button>
        </Link>
        <dialog id="support" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Support Page..</p>
                <form>
                    <input
                    type="text"
                    placeholder="Enter your email here"
                    className="input input-bordered input-secondary w-full max-w-xs" /><button className="btn">Submit</button>
                </form>
                
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        
      </nav>
      {/* Here we use navigation and useNavigation */}
      {
        navigation.state === 'loading' ? 
        <h1 className="mt-4 text-center text-3xl font-bold text-[#00a6b5]">Loading...</h1> : 
        <Outlet></Outlet> // Or, <Outlet/>
      }
      <div className="mt-10">
        <h1 className="text-center text-[#00a6b5] text-2xl font-bold">Welcome to React Router!</h1>
        <div className="mt-12">
            <Footer></Footer>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
