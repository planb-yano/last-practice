import { useQuery } from "react-query";
import apiNote from "../apis/apiNote";

type Data = {
  items: [];
  total: number;
};

const usePosts = () => {
  return useQuery<Data, Error>("posts", () =>
    apiNote.findAllNote.get().then((res) => res.data)
  );
};

export default usePosts;
