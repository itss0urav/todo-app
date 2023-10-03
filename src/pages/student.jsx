import React, { useContext } from "react";
import ContextBase from "../context/ContextBase";

const Student = () => {
  const { Data } = useContext(ContextBase);
  console.log(Data);

  return (
    <div>
      {Data.map((data, index) => (
        <div key={index}>
          <h3>Name: {data.name}</h3>
          <p>Age: {data.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
