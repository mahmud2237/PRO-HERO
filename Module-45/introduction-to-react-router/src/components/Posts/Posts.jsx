import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import './Posts.css';
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set --> set state

    return (
        <div className="flex flex-col text-white justify-center items-center mt-4 space-y-4">
            <h1 className="text-5xl font-bold">Total Post: {posts.length}</h1>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Posts;