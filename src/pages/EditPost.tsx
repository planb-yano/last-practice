import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

type Params = {
  postId: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const EditPost = () => {
  const { postId } = useParams<Params>();

  const queryClient = useQueryClient();

  const updatePostMutation = useMutation(
    (post: Post) =>
      axios.put<Post>(`http://localhost:18080/v1/note/${postId}`, post),
    {
      onSuccess: (res, variables) => {
        const previousPosts = queryClient.getQueryData<Post[]>("posts");
        if (previousPosts) {
          queryClient.setQueryData<Post[]>(
            "posts",
            previousPosts.map((post) =>
              post.id === variables.id ? res.data : post
            )
          );
        }
      },
    }
  );

  const onClickEdit = (post: Post) => {
    updatePostMutation.mutate(post);
    window.location.href = `/post/${postId}`;
  };

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
      <SquareButton children="Edit" onClick={handleSubmit(onClickEdit)} />
    </div>
  );
};

export default EditPost;
