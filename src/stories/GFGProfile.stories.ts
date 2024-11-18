import React from "react";
import type { Meta, Story } from "@storybook/react";

import { GFGProfile } from "../components/GFGProfile";
import "./GFGProfile.css";

interface GFGProfileProps {
  username: string;
}

export default {
  title: "Components/GFGProfile",
  component: GFGProfile,
  argTypes: {
    username: {
      control: "text",
      description: "GeeksforGeeks username to fetch profile for",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GFGProfile>;

const Template: Story<GFGProfileProps> = (args) => <GFGProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "prateekraiger",
};

export const AnotherUser = Template.bind({});
AnotherUser.args = {
  username: "prateekraiger",
};
