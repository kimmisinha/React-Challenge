import React from "react";
import Customhook from "./Customhook";
function ApiFetchtwo() {
  const [data] = Customhook("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.slice(0,5).map((ele) => {
          return <h2>{ele.email}</h2>;
        })}
    </>
  );
}

export default ApiFetchtwo;
