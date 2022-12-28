import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import CircleButton from ".";

export default {
  title: "src/components/CircleButton",
  component: CircleButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (props) => (
  <CircleButton {...props}>Add</CircleButton>
);

export const Default = Template.bind({});
Default.args = {
  href: "aaa",
};
