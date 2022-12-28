import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import TitleButton from ".";

export default {
  title: "src/components/TitleButton",
  component: TitleButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof TitleButton>;

const Template: ComponentStory<typeof TitleButton> = (props) => (
  <TitleButton {...props}></TitleButton>
);

export const Default = Template.bind({});
Default.args = {
  href: "aa",
  title: "記事タイトル",
  date: "2022/11/11",
};
