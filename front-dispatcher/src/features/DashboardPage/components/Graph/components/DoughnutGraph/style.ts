import styled from "styled-components";
import { colors } from "../../../../../../strings/colors";
interface liProps {
  color: string;
}
export const StyledLi = styled.li<liProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  :before {
    content: "•";
    padding-right: 5px;
    color: ${(props) => props.color};
  }
`;
export const StyledUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const LegendText = styled.p`
  color: ${colors.DarkestBlue};
  font-family: "Mulish";
  font-weight: 400;
  &.gray {
    color: ${colors.Gray};
  }
`;