import React from "react";
import { useParams } from "react-router";

const New = () => {
  const { id } = useParams();
  return <div>Blog with id of {id}</div>;
};

export default New;
