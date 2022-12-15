import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const SignupSchema = yup.object().shape({
    title: yup.string().required().max(10, "120文字以内で入力してください"),
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

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onChangeTitle = (e: { target: { value: any } }) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: { target: { value: any } }) => {
    setContent(e.target.value);
  };

  const onClickAdd = () => {
    axios
      .post("http://localhost:18080/v1/note", {
        title: Title,
        content: Content,
      })
      .then((response) => {
        console.log(response);
      });
  };
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
      <div onClick={onClickAdd}>
        <SquareButton children="Add" href="/" />
      </div>
    </div>
  );
};

export default CreatePost;
