import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { headerStrings } from "../../strings/headerString";
import { LogoutBtnStyled } from "./LogoutBtnStyle";

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <LogoutBtnStyled
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {headerStrings.SignOut}
    </LogoutBtnStyled>
  );
};

export default LogoutBtn;
