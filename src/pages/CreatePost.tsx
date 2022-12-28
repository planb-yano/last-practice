import TitleTextField from "@/components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "@/components/DetailTextField";
import SquareButton from "@/components/SquareButton";
import { useMutation, useQueryClient } from "react-query";
import type { Post } from "@/types/app";
import apiNote from "@/apis/apiNote";
import { css } from "@emotion/react";

const CreatePost = () => {
  const SignupSchema = yup.object().shape({
    title: yup.string().required().max(120, "120文字以内で入力してください"),
    content: yup
      .string()
      .required()
      .max(100000, "100000文字以内で入力してください"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    resolver: yupResolver(SignupSchema),
  });

  const queryClient = useQueryClient();

  const createPostMutation = useMutation(
    (post: Post) => apiNote.createNote.post(post),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const onClickAdd = (post: Post) => {
    createPostMutation.mutate(post);
    window.location.href = "/";
  };
  return (
    <div>
      <div css={styles.title}>
        <TitleTextField
          placeholder="記事タイトルを入力"
          register={register("title")}
          errorMessage={errors.title?.message}
        />
      </div>
      <div css={styles.detail}>
        <DetailTextField
          placeholder="記事本文を入力"
          register={register("content")}
          errorMessage={errors.content?.message}
        />
      </div>
      <div css={styles.button}>
        <SquareButton children="Add" onClick={handleSubmit(onClickAdd)} />
      </div>
    </div>
  );
};

const styles = {
  title: css`
    text-align: center;
    margin: 50px 0 30px;
  `,
  detail: css`
    text-align: center;
  `,
  button: css`
    text-align: center;
    margin-top: 50px;
  `,
};

export default CreatePost;
