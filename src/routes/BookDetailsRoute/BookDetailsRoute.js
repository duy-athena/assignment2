import { useParams } from "react-router-dom";

const BookDetailsRoute = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default BookDetailsRoute;
