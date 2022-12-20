import TitleTextField from "../components/TitleTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DetailTextField from "../components/DetailTextField";
import SquareButton from "../components/SquareButton";
import React, { useState } from "react";
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

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickAdd = () => {
    axios
      .post("http://localhost:18080/v1/note", {
        title: title,
        content: content,
      })
      .then((response) => {
        console.log(response);
      });
    window.location.href = "/";
  };
  return (
    <div>
      <TitleTextField
        placeholder="記事タイトルを入力"
        registers={register("title")}
        errorMessage={errors.title?.message}
        value={title}
        onChange={onChangeTitle}
      />
      <DetailTextField
        placeholder="記事本文を入力"
        registers={register("detail")}
        errorMessage={errors.detail?.message}
        value={content}
        onChange={onChangeContent}
      />
      <SquareButton children="Add" onClick={onClickAdd} />
    </div>
  );
};

export default CreatePost;
