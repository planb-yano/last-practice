import { css } from "@emotion/react";

type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }) => {
  return <div css={styles.base}>{children}</div>;
};

const styles = {
  base: css`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: skyblue;
    text-align: center;
    line-height: 70px;
    cursor: pointer;
  `,
};

export default Button;
