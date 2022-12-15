import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import SquareButton from "./index";

export default {
  title: "src/components/SquareButton",
  component: SquareButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof SquareButton>;

const Template: ComponentStory<typeof SquareButton> = (props) => (
  <SquareButton {...props}>Add</SquareButton>
);

export const Default = Template.bind({});
