import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body } = post;

    // const params = useParams();
    // console.log(params);
    const { postId } = useParams();
    console.log(postId);

    const navigate = useNavigate();
    const handleGoBack = () => {
        // Navigate to the previous page
        // history.goBack();
        navigate(-1);
    };

    return (
        <div className="space-y-4 mt-5">
            <h1 className="text-3xl font-bold">Post ID:{id} Details</h1>
            {/* Display user details here */}
            <h2 className="text-2xl font-bold">Title: {title}</h2>
            <p className="text-xs font-bold">{body}</p>
            <button onClick={handleGoBack} className="btn btn-outline">Go Back</button>
        </div>
    );
};

export default PostDetails;