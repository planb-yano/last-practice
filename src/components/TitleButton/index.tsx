import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  title: string;
  date: string;
};

const TitleButton: React.FC<Props> = ({ href, title, date }) => {
  return (
    <Link to={href} css={styles.base}>
      <p css={styles.title}>{title}</p>
      <p css={styles.date}>{date}</p>
    </Link>
  );
};

const styles = {
  base: css`
    display: flex;
    justify-content: space-between;
    background-color: #fee9d6;
    border-radius: 10px;
    padding: 35px;
    text-decoration: none;
    color: black;
  `,
  title: css`
    margin: 0;
  `,
  date: css`
    margin: 0;
  `,
};

export default TitleButton;
