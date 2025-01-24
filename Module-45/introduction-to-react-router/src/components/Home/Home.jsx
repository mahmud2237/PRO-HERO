import home_img from "../../assets/images/1.jpg";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-4 mt-9">
            <h1 className="text-3xl font-bold text-[#008df5]">This is Home Page!</h1>
            <img className="rounded-xl" src={home_img} alt="Small Steps Everyday!" />
            <Footer></Footer>
        </div>
    );
};

export default Home;