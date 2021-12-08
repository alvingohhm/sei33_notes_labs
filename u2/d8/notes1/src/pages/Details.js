import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return (
    <div>
      <h1>Details of {params.item}</h1>
    </div>
  );
};

export default Details;
