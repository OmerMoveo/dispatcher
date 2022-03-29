import { filterActionsStringTypes } from "../store/slicers/filtersSlice";

export const apiStrings: { [key: string]: string[] } = {
  ["Search in"]: ["Top Headlines", "Everything"],
  ["Top Headlines"]: ["Country", "Category", "Sources"],
  Country: [
    "AE",
    "AR",
    "AT",
    "AU",
    "BE",
    "BG",
    "BR",
    "CA",
    "CH",
    "CN",
    "CO",
    "CU",
    "CZ",
    "DE",
    "EG",
    "FR",
    "GB",
    "GR",
    "HK",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IT",
    "JP",
    "KR",
    "LT",
    "LV",
    "MA",
    "MX",
    "MY",
    "NG",
    "NL",
    "NO",
    "NZ",
    "PH",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SA",
    "SE",
    "SG",
    "SI",
    "SK",
    "TH",
    "TR",
    "TW",
    "UA",
    "US",
    "VE",
    "ZA",
  ],
  Category: [
    "Business",
    "Enetertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ],
  Everything: ["Sort by", "Dates", "Sources", "Language"],
  Language: [
    "AR",
    "DE",
    "EN",
    "ES",
    "FR",
    "HE",
    "IT",
    "NL",
    "NO",
    "PT",
    "RU",
    "SE",
    "UD",
    "ZH",
  ],
  ["Sort by"]: ["Relevancy", "Popularity", "PublishedAt"],
  Sources: [
    "Engadget",
    "Reuters",
    "MacRumors",
    "The Verge",
    "CNET",
    "ESPN",
    "New York Times",
    "NBC",
    "CNN",
    "Ynet",
  ],
};
export const ReduxString = {
  TopHeadlines: "Top Headlines",
  Everything: "Everything",
  Filters: "filters",
  Set: "set",
  SortBy: "Sort by",
  Sources: "Sources",
};
export const filterActionsStrings: filterActionsStringTypes[] = [
  "setEndpoint",
  "setSortBy",
  "setSearchInput",
  "setCategory",
  "setCountry",
  "setLanguage",
  "setLanguage",
  "setDate",
  "setSourceEverything",
  "setSourceTopheadlines",
];
export const ipUrls = {
  getClientIpUrl: "https://api.ipify.org/?format=json",
  getInfoFromIpUrl: "http://ip-api.com/json/",
};
export const cardString = {
  NavigateToDispatch: "NAVIGATE TO DISPATCH",
  Continue: "CONTINUE",
};
export const graphString = {
  noDataToDisplay: "No data to display",
  containerClass: "flex column graph",
  cardLayoutClass: "graph",
  graphTypeArray: ["Sources", "Dates", "Tags"],
  Sum: "Sum",
};
export const headerStrings = {
  SignOut: "Sign Out",
  UserInitials: "ON",
  Search: "Search",
};
export const loginString = {
  title: "Welcome to Dispatcher",
  desc: "Locate articles and breaking news headlines from news sources and blogs across the web",
};
export const searchBarStrings = {
  searchDropDownOptions: ["Top Headlines", "Everything"],
  noMatches: "We couldn't find any matches for your query",
  noMatchesContainerClasses: "flex column",
  viewResults: "VIEW RESULTS",
  filter: "FILTER",
  searchIn: "Search in",
  all: "All",
};
export const storyStrings = {
  HeaderTitle: "HEADER",
  UITitle: "UI",
  CardTitle: "CARD",
  DashTitle: "DASHBOARD",
  LoginTitle: "Login",
};
export const routeStrings = {
  dashboardPath: "http://localhost:3000/dashboard",
  loginPath: "http://localhost:3000/login",
  domain: "dev-a194tman.us.auth0.com",
  clientId: "Yyn4S2mF60BUYHMbQjOEf2Nn2kXQsVTg",
};
export const historyStrings = {
  RecentSearches: "RECENT SEARCHES",
  Clear: "CLEAR",
};
export const positionString: { [key: string]: "start" | "end" } = {
  Start: "start",
  End: "end",
};
export const cardResultsStrings = {
  totalResults: "Total results",
  topHeadlinesIn: "Top Headlines in Israel",
};
export const dateStrings: {
  Year: "year";
  Month: "month";
  Day: "day";
} = {
  Year: "year",
  Month: "month",
  Day: "day",
};
