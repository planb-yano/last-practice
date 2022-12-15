import { css } from "@emotion/react";
import Detail from "../components/Detail";
import CircleButton from "../components/CircleButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   createdAt: string;
//   updateAt: string;
// };

type Params = {
  postId: string;
};

const PostDetail = () => {
  const [posts, setPosts] = useState<any>([]);
  const { postId } = useParams<Params>();
  useEffect(() => {
    axios
      .get(`http://localhost:18080/v1/note/${postId}`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, [postId]);
  return (
    <div css={styles.base}>
      <Detail
        title={posts.title}
        date={posts.createdAt}
        description={posts.content}
      ></Detail>
      <CircleButton children="Delete" href="/"></CircleButton>
      <CircleButton
        children="Edit"
        href={`/post/${postId}/edit`}
      ></CircleButton>
    </div>
  );
};

const styles = {
  base: css`
    width: 70%;
    margin: 0 auto;
  `,
  detail: css`
    margin-top: 300px;
  `,
};

export default PostDetail;
