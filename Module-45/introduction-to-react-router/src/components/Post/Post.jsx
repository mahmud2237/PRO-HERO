import { Link, useNavigate } from 'react-router-dom';
import '../Posts/Posts.css';
import PropType from 'prop-types';

const Post = ({post}) => {
    const {title, id} = post;

    const navigate = useNavigate();

    const handlePostDetails = () => {
        console.log(`Clicked on post with ID: ${id}`);
        navigate(`/post/${id}`);
    };
    return (
        <div className='post'>
            <h1 className="text-4xl font-bold">ID: {id}</h1>
            <h2 className="text-3xl font-bold">Title: {title}</h2>
            <div className="flex justify-around items-center">
                <Link to={`/post/${id}`}><button className='btn btn-outline btn-neutral'>Click Here</button></Link>
                <Link to={`/post/${id}`} className='text-blue-600 mr-3'>Post Details..</Link>
                <button onClick={handlePostDetails} className='btn btn-outline btn-neutral'>More...</button>
            </div>
            
        </div>
    );
};

Post.propTypes = {
    post: PropType.object.isRequired,
};

export default Post;