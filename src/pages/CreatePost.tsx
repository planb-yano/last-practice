import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import { useMutation, useQueryClient } from "react-query";
import type { Post } from "../types/app";
import apiProject from "../apis/apiProject";

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
    (post: Post) => apiProject.itemPost.post(post),
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
      <TitleTextField
        placeholder="記事タイトルを入力"
        register={register("title")}
        errorMessage={errors.title?.message}
      />
      <DetailTextField
        placeholder="記事本文を入力"
        register={register("content")}
        errorMessage={errors.content?.message}
      />
      <SquareButton children="Add" onClick={handleSubmit(onClickAdd)} />
    </div>
  );
};

export default CreatePost;
