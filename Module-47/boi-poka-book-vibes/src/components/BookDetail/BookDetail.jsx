import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, getStoredReadList } from "../../utilities/addToDb";


const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    // console.log(typeof bookId, typeof id, typeof data[0].bookId);

    const book = data.find(book => book.bookId === id);
    // console.log(book);
    
    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {
        console.log('Mark as Read');
        addToStoredReadList(id);
    }
    const handleAddToWish = (id) =>{
        console.log('Add to Wishlist');
        getStoredReadList(id);
    }

    return (
        <div className="my-12">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt={bookId} />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleAddToWish(bookId)} className="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;