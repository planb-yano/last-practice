import { ComponentStory, ComponentMeta } from "@storybook/react";
import DetailTextField from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default {
  title: "src/components/DetailTextField",
  component: DetailTextField,
} as ComponentMeta<typeof DetailTextField>;

const SignupSchema = yup.object().shape({
  content: yup
    .string()
    .required()
    .max(100000, "100000文字以内で入力してください"),
});

const Template: ComponentStory<typeof DetailTextField> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const handleOnSubmit = (data: any) => console.log(data);
  const handleOnError = (errors: any) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
      <DetailTextField
        register={register("content")}
        placeholder={"記事本文を入力"}
        errorMessage={errors.content?.message}
      ></DetailTextField>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "本文記事を入力してください。",
};
