import React from "react";
import EmployeeCard from "./EmployeeDetails";

var data = [
  {
    name: "Autonu Kro",
    picture:
      "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/b02c260a72364028b5a4771037efd4fd.jpg",
    position: "SDE",
    department: "Technology",
    email: "autonu.kro@arthmate.co.in",
    phone: 6003162537,
  },
  {
    name: "Akash Raj",
    picture:
      "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/4872b9ee8eaa40a69a7fd07aecc4da3e.jpg",
    position: "SDE",
    department: "Technology",
    email: "akash.raj@arthmate.co.in",
    phone: 7677718670,
  },
  {
    name: "Gopi Kartheek",
    picture:
      "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/8d714ee5cfe6483289f8d269f9af1c54.jpg",
    position: "SDE",
    department: "Technology",
    email: "gopi.kartheek@arthmate.co.in",
    phone: 9381272954,
  },
  {
    name: "Prarabdha Soni",
    picture:
      "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/cddd7077526a4e3397e7732695afaf11.jpeg",
    position: "SDE-2",
    department: "Technology",
    email: "prarabdha.soni@arthmate.co.in",
    phone: 8118898113,
  },
  {
    name: "Shivani Gupta",
    picture:
      "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/92d6f5cbd6124fcab53e8474928d1e48.jpeg",
    position: "SDE-2",
    department: "Technology",
    email: "shivani.gupta@arthmate.co.in",
    phone: 9630508256,
  },
];

export default function Team() {
  return (
    <div className="row my-4">
      {/* <h1>Hello from teams componenets</h1> */}
      {data.map((element) => {
        return (
          <div className="col-md-4" key={element.email}>
            <EmployeeCard employee={element} />
          </div>
        );
      })}
    </div>
  );
}
