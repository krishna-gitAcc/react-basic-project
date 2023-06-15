import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Introduction from "./Components/Introduction";
import Team from "./Components/Team";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { Login } from "./Components/SignIn";
import store from "./Store";

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

//logging the initial state.
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

// store.dispatch({
//   type: "LOGIN",
//   payload: {
//     name: "Krishna",
//     email: "krishna@email",
//     image:
//       "https://media.licdn.com/dms/image/D4D03AQHTaTNplYaz3A/profile-displayphoto-shrink_100_100/0/1683131363420?e=1692230400&v=beta&t=5wbExRnuLQ-IXySqugbTuOhY6tYsuEl_kLZDQEQ7SdA",
//   },
// });
// store.dispatch({ type: "LOGOUT" });



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
                  <Route path="login" element={<Login />} />
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
