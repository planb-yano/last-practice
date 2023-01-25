import { useQuery } from "react-query";
import apiNote from "@/apis/apiNote";
import type { Post } from "@/types/app";

const usePost = (postId?: string) => {
  return useQuery<Post, Error>(
    ["post", postId],
    () => apiNote.findByNote.get(postId).then((res) => res.data),
    { enabled: !!postId }
  );
};

export default usePost;
