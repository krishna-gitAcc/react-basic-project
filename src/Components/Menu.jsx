import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  /* background-color: #c1d0b5; */
  height: 100vh;
  /* color: red; */
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px;
  &:hover {
    background-color: #d2e9e9;
  }
`;
export default function Menu() {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>Home</Items>
        </Link>
        <Link to="/team" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>Teams</Items>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>About</Items>
        </Link>
      </Wrapper>
    </Container>
  );
}
