import React from "react";
import DropDown from "../../../../components/DropDown/DropDown";
import { chooseCorrectActionType } from "../../../../helpers/actionTypeSelector";
import { filterActionsStringTypes } from "../../../../store/slicers/filtersSlice";

import {
  apiStrings,
  filterActionsStrings,
  ReduxString,
  searchBarStrings,
} from "../../../../strings/strings";
import DateInput from "../DateInput/DateInput";

import { DropDownsContainer } from "./style";

interface props {
  searchMainQuery: string;
}

const DropDowns = ({ searchMainQuery }: props) => {
  const createDropDowns = () => {
    if (searchMainQuery === searchBarStrings.searchDropDownOptions[0]) {
      return apiStrings[searchMainQuery].map((cat) => {
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              options={apiStrings[cat]}
              placeHolder={cat}
              reduxActionType={chooseCorrectActionType(cat, searchMainQuery)}
            />
          );
        }
      });
    } else {
      return apiStrings.Everything.map((cat) => {
        //date catagory case
        if (cat === apiStrings.Everything[1]) {
          return <DateInput />;
        }
        if (cat && apiStrings[cat]) {
          return (
            <DropDown
              key={cat}
              options={apiStrings[cat]}
              placeHolder={cat}
              reduxActionType={chooseCorrectActionType(cat, searchMainQuery)}
            />
          );
        }
      });
    }
  };

  return <DropDownsContainer>{createDropDowns()}</DropDownsContainer>;
};

export default DropDowns;
