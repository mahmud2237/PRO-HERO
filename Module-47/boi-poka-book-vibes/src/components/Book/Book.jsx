import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const joinedTags = tags.join(" #");

  return (
    <Link to={`/books/${bookId}`}>
        <div>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px] rounded-xl" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs text-green-400">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2>Author: -{author}</h2>
          <div className="border-t-2 border-dashed"></div>
          <p>Review: {review}</p>
          <p>Total Pages: {totalPages}</p>
          <p>Category: {category}</p>

          <div className="card-actions justify-between">
            <div className="badge badge-outline">
              Rating: {rating}
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-green-400"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-green-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star bg-green-400"
                />
              </div>
            </div>
            <div className="badge badge-outline">Publisher: {publisher}</div>
            <div className="badge badge-outline">
              Year of Publishing: {yearOfPublishing}
            </div>
            <p>Tags: #{joinedTags} </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
