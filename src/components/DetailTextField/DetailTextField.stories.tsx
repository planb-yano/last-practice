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
  detail: yup
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <DetailTextField
        registers={register("detail")}
        placeholder={"記事本文を入力"}
        errorMessage={errors.detail?.message}
      ></DetailTextField>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "本文記事を入力してください。",
};
