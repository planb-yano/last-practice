import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
};

const SquareButton: React.FC<Props> = ({ children, href, onClick }) => {
  return (
    <Link to={href} onClick={onClick} css={styles.base}>
      {children}
    </Link>
  );
};

const styles = {
  base: css`
    display: inline-block;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background-color: black;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
  `,
};

export default SquareButton;
