import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="flex flex-col justify-center items-center space-y-4 mt-12">
            <h1 className="text-5xl font-bold">Ooopps!!!</h1>
            {/* <h2 className="text-xl font-bold">404 Not Found</h2> */}
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 &&
                <div className="flex flex-col justify-center items-center space-y-4 mt-12">
                    <img src="https://media.giphy.com/media/3o7TKz50Rg6ZGmz8RO/giphy.gif" alt="Not available" />
                    <p>Go Back Where you came from</p>
                    <Link to="/" className="text-blue-500"><button className="btn border-cyan-600">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;