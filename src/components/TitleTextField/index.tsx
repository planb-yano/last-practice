import { css } from "@emotion/react";

type Props = {
  placeholder: string;
  register: object;
  errorMessage?: string;
  defaultValue?: string;
};

const TitleTextField: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        css={styles.base}
        type="text"
        placeholder={props.placeholder}
        {...props.register}
        defaultValue={props.defaultValue}
      ></input>
      <p css={styles.message}>{props.errorMessage}</p>
    </div>
  );
};

const styles = {
  base: css`
    width: 80%;
    padding: 14px 10px;
    border-width: 2px;
  `,
  message: css`
    color: red;
    font-size: 14px;
  `,
};

export default TitleTextField;
