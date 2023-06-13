// import React from "react";

// export default function Introduction() {
//   return (
//     <div>
//       <h2>Arthmate</h2>
//       <p>
//         Arthmate is a new-age B2B fintech that is pioneering solutions at the
//         intersection of credit risk, technology and data sciences.
//       </p>
//       <p>
//         Arthmate's plug-and-play platform enables its partners to offer credit
//         as an embedded capability without any lending infra setup at their end.
//         Arthmate services its embedded fintech platform through its in-house
//         NBFC and co-lending partners.
//       </p>
//       <p>Arthmate's working model is based on the following principles:</p>
//       <ul>
//         <li>Use of data science and machine learning to assess credit risk</li>
//         <li>
//           Affordable and accessible credit for small businesses and individuals
//         </li>
//         <li>Fast and easy loan approval process</li>
//         <li>Transparent and competitive pricing</li>
//       </ul>
//       <p>Arthmate's features include:</p>
//       <ul>
//         <li>Unsecured term loans</li>
//         <li>Lines of credit</li>
//         <li>Invoice discounting</li>
//         <li>Personal loans</li>
//         <li>Wages loans</li>
//         <li>Bullet loans</li>
//       </ul>
//       <p>
//         Arthmate is a trusted and reliable financial partner for businesses and
//         individuals across India. With its innovative approach to lending,
//         Arthmate is changing the way people access credit.
//       </p>
//     </div>
//   );
// }
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Introduction = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="home-page">
      <header>
        <h1>Arthmare Finance</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/logout" disabled={isLoggedIn}>Logout</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>
            Arthmare Finance is a decentralized finance platform that allows users to lend, borrow, and earn interest on their crypto assets.
          </p>
        </section>
        <section>
          <h2>Products</h2>
          <ul>
            <li>Lending</li>
            <li>Borrowing</li>
            <li>Earning interest</li>
          </ul>
        </section>
        <section>
          <h2>Community</h2>
          <p>
            Join the Arthmare Finance community on Discord, Telegram, and Twitter.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Introduction;

