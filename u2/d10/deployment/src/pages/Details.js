import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  return (
    <div>
      <h3>Details of {params.item}</h3>
    </div>
  );
};

export default Details;
