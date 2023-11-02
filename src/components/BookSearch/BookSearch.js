import { useEffect, useState } from "react";
import useVolumes from "../../hooks/useVolumes/useVolumes";

const BookSearch = (props) => {
  const { setVolumes } = props;
  const [query, setQuery] = useState("");
  const { data, isLoading, search } = useVolumes({ q: query });

  useEffect(() => {
    if (!data) return;

    setVolumes(data);
  }, [data, setVolumes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await search();
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="basis-full text-center">
        <h2>Book Search</h2>
      </div>
      <div className="basis-full md:basis-2/3 max-w-screen-lg">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full"
            disabled={isLoading}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default BookSearch;
