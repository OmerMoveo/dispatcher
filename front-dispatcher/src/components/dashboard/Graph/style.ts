import styled from "styled-components";
import { ReactComponent as GraphIcon } from "../../../assets/chart.svg";
import { colors } from "../../../strings/colors";

export const NoGraphIcon = styled(GraphIcon)`
  height: 50%;
  width: 50%;
  margin-bottom: 1em;
`;
export const TitleDivider = styled.div`
  background-color: ${colors.DarkBlue};
  width: 3%;
  padding: 0.5%;
  border-radius: 1em;
`;
