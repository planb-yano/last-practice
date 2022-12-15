import { ComponentStory, ComponentMeta } from "@storybook/react";
import Detail from "./index";

export default {
  title: "src/components/Detail",
  component: Detail,
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (props) => (
  <Detail {...props}></Detail>
);

export const Default = Template.bind({});
Default.args = {
  title: "記事タイトル",
  date: "2022/11/11 11:11:11",
  description:
    "記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。記事本文です。",
};
