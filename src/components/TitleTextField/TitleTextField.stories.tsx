import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleTextField from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

export default {
  title: "src/components/TitleTextField",
  component: TitleTextField,
} as ComponentMeta<typeof TitleTextField>;

const SignupSchema = yup.object().shape({
  title: yup.string().required().max(10, "120文字以内で入力してください"),
});

const Template: ComponentStory<typeof TitleTextField> = () => {
  const [title, setTitle] = useState<string>("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  return (
    <form noValidate>
      <TitleTextField
        registers={register("title")}
        placeholder={"記事タイトルを入力"}
        errorMessage={errors.title?.message}
        value={title}
        onChange={onChangeTitle}
      ></TitleTextField>
    </form>
  );
};

export const Default = Template.bind({});
