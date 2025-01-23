import Footer from "../Footer/Footer";
import S_img from '../../assets/images/5.jpg';

const Support = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">This is Support Section Page!</h2>
            <p className="text-xl font-bold">Our support team will guide you 24/7</p>
            <img className="rounded-xl" src={S_img} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Support;