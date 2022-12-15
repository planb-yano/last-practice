import { ComponentStory, ComponentMeta } from "@storybook/react";
import ModalWindow from "./index";

export default {
  title: "src/components/ModalWindow",
  component: ModalWindow,
} as ComponentMeta<typeof ModalWindow>;

const Template: ComponentStory<typeof ModalWindow> = () => (
  <ModalWindow></ModalWindow>
);

export const Default = Template.bind({});
