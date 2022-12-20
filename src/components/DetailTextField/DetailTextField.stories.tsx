import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailTextField from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";

export default {
  title: "src/components/DetailTextField",
  component: DetailTextField,
} as ComponentMeta<typeof DetailTextField>;

const SignupSchema = yup.object().shape({
  detail: yup
    .string()
    .required()
    .max(100000, "100000文字以内で入力してください"),
});

const Template: ComponentStory<typeof DetailTextField> = () => {
  const [content, setContent] = useState<string>("");
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  return (
    <form noValidate>
      <DetailTextField
        registers={register("detail")}
        placeholder={"記事本文を入力"}
        errorMessage={errors.detail?.message}
        value={content}
        onChange={onChangeContent}
      ></DetailTextField>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "本文記事を入力してください。",
};
