import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleTextField from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default {
  title: "src/components/TitleTextField",
  component: TitleTextField,
} as ComponentMeta<typeof TitleTextField>;

const SignupSchema = yup.object().shape({
  title: yup.string().required().max(10, "120文字以内で入力してください"),
});

const Template: ComponentStory<typeof TitleTextField> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TitleTextField
        registers={register("title")}
        placeholder={"記事タイトルを入力"}
        errorMessage={errors.title?.message}
      ></TitleTextField>
    </form>
  );
};

export const Default = Template.bind({});
