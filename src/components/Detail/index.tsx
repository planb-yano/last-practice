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
      <p>{description}</p>
    </div>
  );
};

const styles = {
  title: css`
    font-size: 30px;
  `,
  date: css`
    text-align: right;
    margin: 20px 0 50px;
  `,
};

export default Detail;
