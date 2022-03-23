import { Divider } from "@mui/material";
import React from "react";
import { Container } from "../../../../components/Container/Container";

import { graphString } from "../../../../strings/strings";
import { CardLayout, CardText, CardTitle } from "../../../Card/style";
import DoughnutGraph from "./components/DoughnutGraph/DoughnutGraph";
import { doughnutMockData } from "./components/DoughnutGraph/DoughnutGraph.stories";
import LineGraph from "./components/LineGraph/LineGraph";
import { lineMockData } from "./components/LineGraph/LineGraph.stories";

import { NoGraphIcon, TitleDivider } from "./style";

interface graphProps {
  title: string;
  graphType?: string;
}
//TODO: getData from redux store to pass to graphs | let graphs get data by theirself
const Graph = ({ title, graphType }: graphProps) => {
  const renderGraphsByType = () => {
    return graphType === graphString.SourcesDoughnutType ? (
      <DoughnutGraph data={doughnutMockData} />
    ) : graphType === graphString.DatesLineType ? (
      <LineGraph data={lineMockData} />
    ) : (
      <>
        <NoGraphIcon />
        <CardText>{graphString.noDataToDisplay}</CardText>
      </>
    );
  };
  return (
    <CardLayout className={graphString.cardLayoutClass}>
      <CardTitle>{title}</CardTitle>
      <TitleDivider />
      <Container className={graphString.containerClass}>
        {!graphType ? (
          <>
            <NoGraphIcon />
            <CardText>{graphString.noDataToDisplay}</CardText>
          </>
        ) : (
          renderGraphsByType()
        )}
      </Container>
    </CardLayout>
  );
};

export default Graph;
