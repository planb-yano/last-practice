import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const CircleButton: React.FC<Props> = ({ children, href, onClick }) => {
  return (
    <>
      {href ? (
        <Link to={href} css={styles.base} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button css={styles.base} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

const styles = {
  base: css`
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fe8c25;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    text-decoration: none;
    color: black;
  `,
};

export default CircleButton;
