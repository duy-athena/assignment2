import { useParams } from "react-router-dom";
import useVolumeDetails from "../../hooks/useVolumeDetails/useVolumeDetails";

const BookDetailsRoute = () => {
  const { id } = useParams();
  const { data } = useVolumeDetails(id);

  return <div className="p-4">{JSON.stringify(data)}</div>;
};

export default BookDetailsRoute;
