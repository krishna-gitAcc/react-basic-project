import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Introduction from "./Components/Introduction";
import Team from "./Components/Team";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./Components/Menu";

const Container = styled.div`
  display: flex;
  /* background-color: #f8f6f4; */
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <container>
          <Container>
            <Menu />
            <Main>

              <Routes>
                <Route path="/">
                  <Route index element={<Introduction />} />
                  <Route path="team" element={<Team />} />
                  <Route path="about" element={<About />} />
                </Route>
              </Routes>
            </Main>
          </Container>
        </container>
      </BrowserRouter>
    </div>
  );
}

export default App;
