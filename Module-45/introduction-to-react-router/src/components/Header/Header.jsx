import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import head_img from '../../../public/react.png';
import '../../App.css';

const Header = () => {
  return (
    <div className="space-x-3 text-white">
        <div className="flex justify-center items-center">
            <img className="logo rounded-full" src={head_img} alt="logo" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-4">React Router</h2>
        </div>
      <nav>
        <Link to="/home">
          <button className="btn btn-info" onClick={()=>document.getElementById('home').showModal()}>Home</button>
        </Link>
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
          <button className="btn btn-success" onClick={()=>document.getElementById('users').showModal()}>Users</button>
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
        <Link to="/about">
          <button className="btn btn-warning" onClick={()=>document.getElementById('about').showModal()}>About</button>
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
          <button className="btn btn-error" onClick={()=>document.getElementById('contact').showModal()}>Contact</button>
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
          <button className="btn btn-primary" onClick={()=>document.getElementById('support').showModal()}>Support</button>
        </Link>
        <dialog id="support" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-green-500">Congrats!</h3>
                <p className="py-4">Now you are on the Support Page..</p>
                <div className="modal-action items-center justify-center">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-red-600">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
        
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
