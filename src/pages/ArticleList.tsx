import { css } from "@emotion/react";
import Button from "../components/Button";
import TitleButton from "../components/TitleButton";

const ArticleList = () => {
  return (
    <>
      <ul>
        <li css={styles.title}>
          <TitleButton></TitleButton>
        </li>
        <li css={styles.title}>
          <TitleButton></TitleButton>
        </li>
        <li css={styles.title}>
          <TitleButton></TitleButton>
        </li>
        <li css={styles.title}>
          <TitleButton></TitleButton>
        </li>
      </ul>
      <div css={styles.button}>
        <Button children={"Add"}></Button>
      </div>
    </>
  );
};

const styles = {
  title: css`
    list-style: none;
    margin: 50px 300px;
  `,
  button: css``,
};

export default ArticleList;
