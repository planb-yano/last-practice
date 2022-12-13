import { css } from "@emotion/react";
import Detail from "../components/Detail";
import CircleButton from "../components/CircleButton";

const PostDetail = () => {
  return (
    <div css={styles.base}>
      <Detail
        title="記事タイトル"
        date="2022/11/11 11:11:11"
        description="記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。"
      ></Detail>
      <CircleButton children="Delete" href="/"></CircleButton>
      <CircleButton children="Edit" href="/post/:postId/edit"></CircleButton>
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
  `
};

export default PostDetail;
