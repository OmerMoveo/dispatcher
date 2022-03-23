import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  Label,
  ResponsiveContainer,
} from "recharts";
import { colors } from "../../../../../../strings/colors";
import { graphString } from "../../../../../../strings/strings";
import { LegendText, StyledLi, StyledUl } from "./style";

interface doughnutProps {
  data: {
    name: string;
    value: number;
  }[];
}

const DoughnutGraph = ({ data }: doughnutProps) => {
  const totalValues = data.reduce((prev, current) => prev + current.value, 0);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={70}
          paddingAngle={0}
          dataKey="value"
        >
          <Label value={graphString.Sum} position="center" />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                colors.DoughnutGraphColors[
                  index % colors.DoughnutGraphColors.length
                ]
              }
            />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          align="left"
          layout="vertical"
          width={100}
          height={100}
          payload={data.map((item, index) => ({
            id: item.name,
            value: `${item.name}\n${item.value}`,
            color:
              colors.DoughnutGraphColors[
                index % colors.DoughnutGraphColors.length
              ],
          }))}
          content={(e) => renderLegend(e, totalValues)}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const renderLegend = (...args: any) => {
  const [dets, totalValues] = args;
  const { payload } = dets;
  return (
    <StyledUl>
      {payload.map((entry: any, index: number) => {
        const splitEntry = entry.value.split("\n");
        return (
          <StyledLi color={entry.color} key={entry.value}>
            <LegendText>{splitEntry[0]}</LegendText>
            <LegendText className="gray">
              {`${((Number(splitEntry[1]) / totalValues) * 100).toFixed(0)}%`}
            </LegendText>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
export default DoughnutGraph;
