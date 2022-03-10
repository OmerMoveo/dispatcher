import styled from "styled-components";
import { colors } from "../../../strings/colors";
import DropDown from "../../UI/DropDown/DropDown";
//import dropdown

export const StyledHeaderBtn = styled.button`
  background: ${colors.Blue};
  border-radius: 50%;
  font-family: Roboto Mono Medium for Powerline;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  letter-spacing: 0.25px;
  line-height: 16px;
  border: none;
  color: ${colors.White};
  cursor: pointer;
  height: 50px;
  width: 50px;
  @media only screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
    font-size: 0.8em;
  }
`;
