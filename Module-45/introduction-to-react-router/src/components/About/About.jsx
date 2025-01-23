import Footer from "../Footer/Footer";
import about_img from '../../assets/images/3.jpg';


const About = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold">This is our About Page!</h1>
            <p className="text-xl font-bold">Everything you want to know will be here...</p>
            <img className="rounded-xl" src={about_img} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default About;