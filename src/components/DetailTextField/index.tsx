import { css } from "@emotion/react";
import React from "react";

type Props = {
  placeholder: string;
  registers: any;
  errorMessage: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const DetailTextField: React.FC<Props> = (props) => {
  return (
    <div>
      <textarea
        css={styles.base}
        placeholder={props.placeholder}
        {...props.registers}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
      <p css={styles.message}>{props.errorMessage}</p>
    </div>
  );
};

const styles = {
  base: css`
    width: 80%;
    height: 50vh;
    padding: 14px 10px;
    border-width: 2px;
  `,
  message: css`
    color: red;
    font-size: 14px;
  `,
};

export default DetailTextField;
