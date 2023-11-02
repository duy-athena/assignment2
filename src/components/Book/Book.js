const Book = (props) => {
  const { title, authors, thumbnail } = props;

  return (
    <div>
      <div className="w-full">
        <img className="max-w-full" alt="title" src={thumbnail} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>{authors}</div>
    </div>
  );
};

export default Book;
