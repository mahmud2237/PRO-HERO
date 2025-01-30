import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedReadList = getStoredReadList();
        console.log(storedReadList, allBooks);  // there types are different
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way to load some data
        console.log(storedReadListInt, allBooks); // now there types are same

        // now we can filter the books
        const readBooksList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        console.log(readBooksList);  // now we have the read books only

        setReadList(readBooksList);
    }, []);



  return (
    <div>
      <h1 className="text-4xl font-bold my-8">Listed Books</h1>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Wish List Books Are:</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
