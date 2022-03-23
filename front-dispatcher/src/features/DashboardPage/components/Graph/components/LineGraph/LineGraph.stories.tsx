import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { storyStrings } from "../../../../../../strings/strings";
import LineGraph from "./LineGraph";
import mock from "../../../../../../mock/mockData.json";
export default {
  title: storyStrings.DashTitle,
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;
const Template: ComponentStory<typeof LineGraph> = (args) => (
  <LineGraph {...args} />
);
export const lineMockData = [
  {
    identifier: "April",
    value: 2400,
  },
  {
    identifier: "March",
    value: 2210,
  },
  {
    identifier: "July",
    value: 2290,
  },
  {
    identifier: "June",
    value: 2000,
  },
  {
    identifier: "August",
    value: 2181,
  },
  {
    identifier: "January",
    value: 2500,
  },
  {
    identifier: "May",
    value: 2100,
  },
];
const mockData = mock.articles.map(({ publishedAt }, index) => {
  const dateFormat = new Date(publishedAt);
  return {
    identifier: String(dateFormat.getHours()),
    date: dateFormat,
  };
});
export const LineGraphStory = Template.bind({});

LineGraphStory.args = {
  data: lineMockData,
};
