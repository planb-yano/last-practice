import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  onClick: any;
};

const SquareButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} css={styles.base}>
      {children}
    </div>
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
    cursor: pointer;
  `,
};

export default SquareButton;
