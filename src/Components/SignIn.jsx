import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../Store";

export const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", name: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClick();
  };
  const handleClick = async () => {
    console.log("handle click is clicked");
    store.dispatch({
      type: "LOGIN",
      payload: {
        name: credential.name,
        email: credential.email,
        image:
          "https://media.licdn.com/dms/image/D4D03AQHTaTNplYaz3A/profile-displayphoto-shrink_100_100/0/1683131363420?e=1692230400&v=beta&t=5wbExRnuLQ-IXySqugbTuOhY6tYsuEl_kLZDQEQ7SdA",
      },
    });
    navigate("/");
    console.log("successfully login.");
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="mx-2 my-3">Login to Arthmate</h2>
        <form className="container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              value={credential.name}
              name="name"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={credential.password}
              name="email"
              placeholder="Enter Your Email"
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
