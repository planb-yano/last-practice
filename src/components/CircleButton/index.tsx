import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  href: string;
};

const CircleButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Link to={href} css={styles.base}>
      {children}
    </Link>
  );
};

const styles = {
  base: css`
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: skyblue;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    text-decoration: none;
    color: black;
  `,
};

export default CircleButton;
