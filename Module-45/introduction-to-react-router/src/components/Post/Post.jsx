import '../Posts/Posts.css';
import PropType from 'prop-types';

const Post = ({post}) => {
    const {title, id, body} = post;
    return (
        <div className='post'>
            <h1 className="text-4xl font-bold">ID: {id}</h1>
            <h2 className="text-3xl font-bold">Title: {title}</h2>
            <p className="text-xs font-bold">{body}</p>
        </div>
    );
};

Post.propTypes = {
    post: PropType.object.isRequired,
};

export default Post;