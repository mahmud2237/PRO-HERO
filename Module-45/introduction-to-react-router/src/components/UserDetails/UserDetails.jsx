import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, username, phone, email, address } = user;


    return (
        <div className="space-y-4 mt-5">
            <h1 className="text-3xl font-bold">User ID:{id} Details</h1>
            {/* Display user details here */}
            <h2 className="text-2xl font-bold">Name: {name}</h2>
            <p className="text-xl font-bold">Username: {username}</p>
            <p className="font-bold">Phone: {phone}</p>
            <p className="font-bold">Email: {email}</p>
            <p>Address: {address.street}, {address.suite}, {address.city}.</p> 
            <p>ZipCode: {address.zipcode}</p>
        </div>
    );
};

export default UserDetails;