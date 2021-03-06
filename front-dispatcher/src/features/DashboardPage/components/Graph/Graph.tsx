import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GraphSkeleton from "../../../../components/Skeletons/GraphSkeleton/GraphSkeleton";
import { useAppSelector } from "../../../../store";
import {
  graphServerUrls,
  graphString,
  ReduxString,
} from "../../../../strings/strings";
import { CardText } from "../../../Card/style";
import DoughnutGraph from "./components/DoughnutGraph/DoughnutGraph";
import LineGraph from "./components/LineGraph/LineGraph";
import TagsGraph from "./components/TagsGraph/TagsGraph";
import {
  FlexDiv,
  GraphContentDiv,
  GraphLayout,
  GraphTitle,
  NoContentDiv,
  NoGraphIcon,
  ResultsCounter,
  TitleDivider,
} from "./style";
import { graphObjType } from "./utils/graphData";

interface graphProps {
  title: string;
  graphType: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  const { articles, status, totalResults } = useAppSelector(
    (state) => state.apiData
  );
  const [graphData, setGraphData] = useState<graphObjType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const requestUrl =
          graphType === graphString.Sources
            ? graphServerUrls.Doughnut
            : graphType === graphString.Dates
            ? graphServerUrls.Line
            : graphServerUrls.Tags;
        const serverResponse = await axios.post(requestUrl, {
          data: articles,
        });
        const pulledData: graphObjType[] = serverResponse.data;
        setGraphData(pulledData);
      } catch (error) {
        setGraphData([]);
      }
    })();
  }, [articles, status]);

  const showGraphByType = () => {
    return graphType === graphString.Sources ? (
      <GraphContentDiv>
        <DoughnutGraph data={graphData} />
      </GraphContentDiv>
    ) : graphType === graphString.Dates ? (
      <GraphContentDiv>
        <LineGraph data={graphData} />
      </GraphContentDiv>
    ) : (
      <GraphContentDiv>
        <TagsGraph data={graphData} total={articles.length} />
      </GraphContentDiv>
    );
  };
  const showNoGraphType = () => {
    return (
      <NoContentDiv>
        <NoGraphIcon />
        <CardText>{graphString.noDataToDisplay}</CardText>
      </NoContentDiv>
    );
  };
  return (
    <GraphLayout>
      <div>
        <FlexDiv>
          <GraphTitle>{title}</GraphTitle>
          <ResultsCounter>
            {articles.length > 0 && `${articles.length} of ${totalResults}`}
          </ResultsCounter>
        </FlexDiv>
        <TitleDivider />
      </div>
      {status === ReduxString.Loading ? (
        <GraphSkeleton graphType={graphType} />
      ) : !graphType || !articles || articles.length === 0 ? (
        showNoGraphType()
      ) : (
        graphType && showGraphByType()
      )}
    </GraphLayout>
  );
};

export default Graph;
