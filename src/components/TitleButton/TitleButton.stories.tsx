import { ComponentStory, ComponentMeta } from "@storybook/react";
import TitleButton from "./index";

export default {
  title: "src/components/TitleButton",
  component: TitleButton,
} as ComponentMeta<typeof TitleButton>;

const Template: ComponentStory<typeof TitleButton> = () => (
  <TitleButton></TitleButton>
);

export const Default = Template.bind({});
