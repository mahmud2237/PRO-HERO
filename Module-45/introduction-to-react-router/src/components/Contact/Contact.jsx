import Footer from "../Footer/Footer";
import C_img from '../../assets/images/4.jpg';

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">This is The Contact Page! (Call 999)</h1>
            <p className="text-xl font-bold">You are just one call away!</p>
            <img className="rounded-xl" src={C_img} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Contact;