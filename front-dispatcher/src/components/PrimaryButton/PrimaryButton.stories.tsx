import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PrimaryButton from "./style";
import { cardString, storyStrings } from "../../strings/strings";

export default {
  title: storyStrings.UITitle,
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args}>{cardString.Continue}</PrimaryButton>
);

export const PrimaryBtnStory = Template.bind({});

PrimaryBtnStory.args = {};
