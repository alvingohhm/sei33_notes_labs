import React, { useState } from "react";

const Card = (props) => {
  const { imgSrc, birdName, userName, approved } = props;

  const [approvedState, setApprovedState] = useState(approved);
  const btn_onClick = () => {
    setApprovedState(!approvedState);
  };
  const btnName = approvedState ? "un-approve" : "approve";

  return (
    <div className="card-row">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={birdName} />
        <div className="card-body">
          <h5 className="card-title">{birdName}</h5>
          <p className="card-text">Submission by: {userName}</p>
          <a href="#!" className="btn btn-primary" onClick={btn_onClick}>
            {btnName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
