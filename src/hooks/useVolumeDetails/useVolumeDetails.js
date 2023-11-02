import { useEffect, useState } from "react";
import config from "../../config";

const useVolumeDetails = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    (async () => {
      const response = await fetch(
        `${config.BASE_URL}/${id}?key=${config.API_KEY}`
      );
      const data = await response.json();

      setData(data);
    })();
  }, [id]);

  return { isLoading, data };
};

export default useVolumeDetails;
