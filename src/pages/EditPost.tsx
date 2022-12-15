import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updateAt: string;
};

type Params = {
  postId: string;
};

const EditPost = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:18080/v1/note")
      .then((response) => setItems(response.data.items));
  }, []);

  const onChangeTitle = (e: { target: { value: any } }) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: { target: { value: any } }) => {
    setContent(e.target.value);
  };

  const { postId } = useParams<Params>();

  const onClickEdit = () => {
    axios
      .post(`http://localhost:18080/v1/note/${postId}`, {
        title: Title,
        content: Content,
      })
      .then((response) => {
        const editItem = items.map((item) => {
          if (item.id === response.data.id) {
            return response.data;
          } else {
            return item;
          }
        });
        setItems(editItem);
      });
  };

  const SignupSchema = yup.object().shape({
    title: yup.string().required().max(120, "120文字以内で入力してください"),
    detail: yup
      .string()
      .required()
      .max(100000, "100000文字以内で入力してください"),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  return (
    <div>
      <TitleTextField
        placeholder="記事タイトルを入力"
        registers={register("title")}
        errorMessage={errors.title?.message}
        value={Title}
        onChange={onChangeTitle}
      />
      <DetailTextField
        placeholder="記事本文を入力"
        registers={register("detail")}
        errorMessage={errors.detail?.message}
        value={Content}
        onChange={onChangeContent}
      />
      <div onClick={onClickEdit}>
        <SquareButton children="Edit" href={`/post/${postId}`} />
      </div>
    </div>
  );
};

export default EditPost;
