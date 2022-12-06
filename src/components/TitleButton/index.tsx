import { css } from "@emotion/react";

const TitleButton = () => {
  return (
    <div css={styles.base}>
      <p css={styles.title}>記事タイトル</p>
      <p css={styles.date}>2022/11/11</p>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    border-radius: 10px;
    padding: 35px;
  `,
  title: css`
    margin: 0;
  `,
  date: css`
    margin: 0;
  `,
};

export default TitleButton;
