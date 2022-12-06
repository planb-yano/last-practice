import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "src/components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props}>Add</Button>
);

export const Default = Template.bind({});
