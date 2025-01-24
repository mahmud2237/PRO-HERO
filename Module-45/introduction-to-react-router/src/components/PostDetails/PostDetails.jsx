import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body } = post;
    return (
        <div className="space-y-4 mt-5">
            <h1 className="text-3xl font-bold">Post ID:{id} Details</h1>
            {/* Display user details here */}
            <h2 className="text-2xl font-bold">Title: {title}</h2>
            <p className="text-xl font-bold">{body}</p>
        </div>
    );
};

export default PostDetails;