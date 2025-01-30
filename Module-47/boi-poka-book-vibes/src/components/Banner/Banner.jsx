
import ban_img from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ban_img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-5xl font-bold">Library Books!</h1>
            <p className="py-6">
              This is a Public Library. You can borrow books from here. We have a huge collection of books. You can find your desired book here.
            </p>
            <button className="btn btn-primary w-1/3">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
