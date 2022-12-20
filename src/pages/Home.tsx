import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CircleButton from "../components/CircleButton";
import TitleButton from "../components/TitleButton";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:18080/v1/note")
      .then((response) => setPosts(response.data.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div css={styles.base}>
      <ul css={styles.list}>
        {posts.map((post: Post) => (
          <li key={post.id} css={styles.title}>
            <TitleButton
              href={`/post/${post.id}`}
              title={post.title}
              date={post.createdAt.split("T")[0]}
            />
          </li>
        ))}
      </ul>
      <div css={styles.button}>
        <CircleButton children="Add" href="/post/create"></CircleButton>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    width: 70%;
    margin: 0 auto;
  `,
  list: css`
    padding: 0;
  `,
  title: css`
    list-style: none;
    margin: 50px 0;
  `,
  button: css`
    text-align: right;
  `,
};

export default Home;
