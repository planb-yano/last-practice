import { css } from "@emotion/react";

type Props = {
  title: string;
  date: string;
  description: string;
};

const Detail: React.FC<Props> = ({ title, date, description }) => {
  return (
    <div>
      <h1 css={styles.title}>{title}</h1>
      <p css={styles.date}>{date}</p>
      <p css={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  title: css`
    font-size: 30px;
  `,
  date: css`
    text-align: right;
  `,
  description: css`
    margin-top: 20px;
  `,
};

export default Detail;
