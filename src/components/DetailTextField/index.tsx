import { css } from "@emotion/react";

type Props = {
  placeholder: string;
  registers: any;
  errorMessage: any;
};

const DetailTextField: React.FC<Props> = (props) => {
  return (
    <div>
      <textarea
        css={styles.base}
        placeholder={props.placeholder}
        {...props.registers}
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
  `,
  message: css`
    color: red;
    font-size: 14px;
  `,
};

export default DetailTextField;
