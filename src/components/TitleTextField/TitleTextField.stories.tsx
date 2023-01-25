import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleTextField from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default {
  title: "src/components/TitleTextField",
  component: TitleTextField,
} as ComponentMeta<typeof TitleTextField>;

type Input = {
  title: string;
  content: string;
};

type Data = {
  title: string;
};

const SignupSchema = yup.object().shape({
  title: yup
    .string()
    .required("必須入力項目です")
    .max(120, "120文字以内で入力してください"),
});

const Template: ComponentStory<typeof TitleTextField> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: yupResolver(SignupSchema),
  });

  const handleOnSubmit = (data: Data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <TitleTextField
        register={register("title")}
        placeholder={"記事タイトルを入力"}
        errorMessage={errors.title?.message}
      ></TitleTextField>
    </form>
  );
};

export const Default = Template.bind({});
