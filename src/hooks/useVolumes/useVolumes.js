import { useCallback, useState } from "react";
import config from "../../config";
import { mapVolumes } from "../../components/lib/helpers";

const useVolumes = (props) => {
  const { q } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const search = useCallback(async () => {
    setIsLoading(true);

    const searchParams = new URLSearchParams();

    searchParams.set("q", q);
    searchParams.set("key", config.API_KEY);

    const response = await fetch(
      `${config.BASE_URL}?${searchParams.toString()}`
    );
    const data = await response.json();

    setData(mapVolumes(data.items));
    setIsLoading(false);
  }, [q]);

  return { isLoading, data, search };
};

export default useVolumes;
