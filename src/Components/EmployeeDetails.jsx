import React, { useState } from "react";

const EmployeeCard = ({ employee }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="employee-card">
      <img src={employee.picture} alt="Employee" />
      <h2>{employee.name}</h2>
      <button onClick={toggleExpand}>
        {expanded ? "Less Info" : "More Info"}
      </button>
      {expanded && (
        <div className="additional-info">
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Department:</strong> {employee.department}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Phone:</strong> {employee.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
