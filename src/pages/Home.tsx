import { css } from "@emotion/react";
import CircleButton from "@/components/CircleButton";
import TitleButton from "@/components/TitleButton";
import type { Post } from "@/types/app";
import usePosts from "@/hooks/usePosts";

const Home = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div css={styles.base}>
      <ul css={styles.list}>
        {data?.items.map((post: Post) => (
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
    width: 60%;
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
    margin-bottom: 20px;
  `,
};

export default Home;
