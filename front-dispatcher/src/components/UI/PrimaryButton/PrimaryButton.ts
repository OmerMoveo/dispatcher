import styled from "styled-components";
import { colors } from "../../../strings/colors";

const PrimaryButton = styled.button`
  background: ${colors.Blue};
  border-radius: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-style: normal;
  color: ${colors.White};
  border: none;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &.right {
    float: right;
  }
`;
export default PrimaryButton;
