import React from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import {AccountCircleIcon} from "@mui/icons-material/AccountCircle";
// import AccountCircle from "@material-ui/icons/es/AccountCircle";
// import AdUnitsIcon from "@mui/icons-material/AdUnits";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link class="navbar-brand " to="/">
            <img
              src="https://dyvmwwyqozzzb.cloudfront.net/main/Artmate-logo.webp"
              alt=""
              width="150"
              height="40"
              class="d-inline-block align-text-top"
            />
          </Link>
          <Button>
            Sign In
          </Button>
          {/* </Link> */}
        </div>
      </nav>
    </div>
  );
}
