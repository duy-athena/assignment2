import { useState } from "react";
import Book from "../../components/Book/Book";
import BookSearch from "../../components/BookSearch/BookSearch";
import { Link } from "react-router-dom";

const BooksRoute = () => {
  const [volumes, setVolumes] = useState([]);

  return (
    <div className="p-4">
      <BookSearch setVolumes={setVolumes} />

      <div className="mt-8 mx-auto flex flex-wrap w-full max-w-2xl">
        {volumes.map(({ id, title, authors, thumbnail }) => (
          <Link
            key={id}
            to={`/books/${id}`}
            className="basis-full md:basis-1/3"
          >
            <Book title={title} authors={authors} thumbnail={thumbnail} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksRoute;
