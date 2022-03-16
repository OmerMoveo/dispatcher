import styled from "styled-components";
import { colors } from "../../strings/colors";

export const Container = styled.div`
  margin: 0 5%;
  &.flex {
    display: flex;
    align-items: center;
  }
  &.noPad {
    padding: 0;
    margin: 0;
    width: 80%;
  }
  &.noPadLower {
    padding: 0;
    width: 80%;
    margin: 2em 0 0 0;
    @media only screen and (max-width: 900px) {
      position: absolute;
      bottom: 5%;
    }
  }
  &.fullScreen {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  &.dashColor {
    margin-top: 74px;
    background-color: ${colors.LightestGray};
  }
  &.login {
    background-color: ${colors.LightestGray};
    height: 100vh;
    margin: 0;
    padding: 0 5%;
    width: 55%;
    justify-content: center;
    align-items: start;
    @media only screen and (max-width: 900px) {
      width: 100%;
      height: 75%;
      padding: 0;
    }
  }
  & .loginContent {
    justify-content: center;
    align-items: start;
    width: 60%;
    height: 100vh;
    margin: 0;
    @media only screen and (max-width: 900px) {
      width: 100%;
      margin: 0;
      padding: 0 10%;
      height: 75%;
    }
  }
  &.column {
    flex-direction: column;
  }
  &.cardContainer {
    overflow-y: scroll;
    max-height: 80vh;
    width: 100%;
    margin: 0;
  }
  &.mainContent {
    padding: 1em 5%;
    overflow: hidden;
    max-height: 90vh;
  }
  &.graph {
    margin-top: 10%;
  }
  &.relative {
    position: relative;
  }
`;
