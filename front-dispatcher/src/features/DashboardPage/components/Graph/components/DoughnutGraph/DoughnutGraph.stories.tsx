import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../../../../../strings/strings";
import DoughnutGraph from "./DoughnutGraph";
import mock from "../../../../../../mock/mockData.json";
export default {
  title: storyStrings.DashTitle,
  component: DoughnutGraph,
} as ComponentMeta<typeof DoughnutGraph>;
const Template: ComponentStory<typeof DoughnutGraph> = (args) => (
  <DoughnutGraph {...args} />
);

export const DoughnutGraphStory = Template.bind({});
export const doughnutMockData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

DoughnutGraphStory.args = {
  data: doughnutMockData,
};
