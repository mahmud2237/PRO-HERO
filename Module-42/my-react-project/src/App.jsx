import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
    const newReadingtime = readingTime + time;
    setReadingTime(newReadingtime);
  };

  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <div className="w-2/3">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleAddToBookMark={handleAddToBookMark}
          ></Blogs>
        </div>
        <div className="w-1/3">
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
