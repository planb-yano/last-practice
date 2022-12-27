import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import type { Post } from "../types/app";
import type { Params } from "../types/app";
import apiProject from "../apis/apiProject";

const EditPost = () => {
  const { postId } = useParams<Params>();
  const getPosts = () => {
    const post = apiProject.itemGet
      .get(postId)
      .then((response) => response.data);
    return post;
  };

  const [post, setPost] = useState<Post>();

  const { isLoading } = useQuery<Post, Error>("post", getPosts, {
    onSuccess: (data) => setPost(data),
  });

  const queryClient = useQueryClient();

  const updatePostMutation = useMutation(
    (post: Post) => apiProject.itemPut.put(postId, post),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["post", postId]);
      },
    }
  );

  const onClickEdit = (post: Post) => {
    updatePostMutation.mutate(post);
    window.location.href = `/post/${postId}`;
  };

  const SignupSchema = yup.object().shape({
    title: yup.string().max(120, "120文字以内で入力してください"),
    content: yup.string().max(100000, "100000文字以内で入力してください"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    resolver: yupResolver(SignupSchema),
  });

  if (isLoading) return <span>Loading...</span>;

  return (
    <div>
      <TitleTextField
        placeholder="記事タイトルを入力"
        register={register("title")}
        errorMessage={errors.title?.message}
        defaultValue={post?.title}
      />
      <DetailTextField
        placeholder="記事本文を入力"
        register={register("content")}
        errorMessage={errors.content?.message}
        defaultValue={post?.content}
      />
      <SquareButton children="Edit" onClick={handleSubmit(onClickEdit)} />
    </div>
  );
};

export default EditPost;
