import PropTypes from 'prop-types';
import { IoBookmarksOutline } from 'react-icons/io5';

const Blog = ({blog}) => {
    const { title, cover, author,
         author_img, reading_time, 
         posted_date, hashtags } = blog;

    console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover pic of the ${title}`} />
            <div className='flex flex-row justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>Posted: {posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mins read</span>
                    <button className='ml-2 text-2xl text-red-600'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;