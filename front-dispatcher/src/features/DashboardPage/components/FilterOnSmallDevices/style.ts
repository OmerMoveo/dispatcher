import styled from "styled-components";
import { colors } from "../../../../strings/colors";
import { ReactComponent as FilterIcon } from "../../../../assets/filter.svg";
interface MobileFilterDivProps {
  flexJustifyContent?: boolean;
}
export const MobileFilterDiv = styled.div<MobileFilterDivProps>`
  background-color: ${colors.White};
  display: flex;
  justify-content: ${(props) =>
    props.flexJustifyContent ? "space-between" : "flex-end"};
  padding: 0 12px 0 16px;
  max-width: 100vw;
  height: 5%;
  min-height: 39px;
  align-items: center;
  border: 1px solid ${colors.Gray};
  color: ${colors.DarkBlue};
  font-size: 95%;
  font-family: Roboto;
  font-weight: 400;
`;
export const SortByDiv = styled.div`
  width: 110px;
`;
export const FilterDiv = styled.div`
  z-index: 500;
  height: 100vh;
  width: 48vw;
  background-color: ${colors.White};
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 580px) {
    width: 79%;
  }
`;
interface filterIconProps {
  changesMade?: boolean;
}
export const FilterIconStyled = styled(FilterIcon)<filterIconProps>`
  cursor: pointer;
  filter: ${(props) =>
    props.changesMade && "sepia(100%) hue-rotate(190deg) saturate(500%)"};
  &:hover {
    opacity: 0.8;
  }
`;
export const FilterBtnDiv = styled.div`
  background-color: ${colors.LightestGray};
  height: 9.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 91.5%;
  overflow-y: scroll;
`;
export const FilterItemCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${colors.Gray};

  :hover {
    background-color: ${colors.LightestGray};
    cursor: pointer;
  }
`;
interface filterTextProps {
  notSelected?: boolean;
}
export const FilterItemText = styled.p<filterTextProps>`
  font-family: Roboto;
  font-weight: 400;
  color: ${(p) => (p.notSelected ? colors.Gray : colors.DarkBlue)};
  padding: 0 8%;
`;
interface filterTitleProps {
  pointer?: boolean;
}
export const FilterItemTitle = styled.p<filterTitleProps>`
  font-family: Roboto;
  font-weight: 500;
  font-size: 120%;
  color: ${colors.DarkBlue};
  padding: 0 8%;
  height: 74px;
  min-height: 74px;
  cursor: ${(p) => (p.pointer ? "pointer" : "")};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.Gray};
  margin: 0;
`;
