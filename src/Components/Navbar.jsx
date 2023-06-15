import React from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import {AccountCircleIcon} from "@mui/icons-material/AccountCircle";
// import AccountCircle from "@material-ui/icons/es/AccountCircle";
// import AdUnitsIcon from "@mui/icons-material/AdUnits";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import store from "../Store";
import { useSelector } from "react-redux";

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function loginStatusSelector(state) {
  return state.login;
}

function getUserNameSelector(state) {
  return state.name;
}

export default function Navbar() {
  const loginStatus = useSelector(loginStatusSelector);
  const useName = useSelector(getUserNameSelector);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    store.dispatch({ type: "LOGOUT" });
    // navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img
              src="https://dyvmwwyqozzzb.cloudfront.net/main/Artmate-logo.webp"
              alt=""
              width="150"
              height="40"
              className="d-inline-block align-text-top"
            />
          </Link>
          {loginStatus && <span>Welcome {useName}</span>}
          {loginStatus && <Button onClick={handleLogout}>Logout</Button>}
          {!loginStatus && <Button onClick={handleSignIn}>Sign In</Button>}
        </div>
      </nav>
    </div>
  );
}
