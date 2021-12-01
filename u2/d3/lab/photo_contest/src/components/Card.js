import React, { useState } from "react";

const Card = (props) => {
  const { imgSrc, birdName, userName, approved } = props;
  const [approvedState, setApprovedState] = useState(props.approved);
  console.log(birdName);
  console.log("approvedState", approvedState);
  console.log("approved", approved);
  const btn_onClick = () => {
    // setApprovedState(!approvedState);
  };
  // console.log(birdName);
  // console.log("approvedState", approvedState);

  const btnName = approved ? "un-approve" : "approve";

  return (
    <div className="card-row">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={birdName} />
        <div className="card-body">
          <h5 className="card-title">{birdName}</h5>
          <p className="card-text">Submission by: {userName}</p>
          <a href="#!" className="btn btn-primary">
            {btnName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
