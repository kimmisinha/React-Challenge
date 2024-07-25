import { useState } from "react";
import React from "react";

function Question1() {
  const [elves, setElves] = useState(['Buddy', 'Dobby', 'Winky', 'Bing', 'Bernard']);

   function sortAscending(){

    setElves([...elves].sort());
   }
   function sortDescending(){

    setElves([...elves].sort().reverse());

   }
  return (
    <div>
      <button onClick={sortAscending}>Sort A-Z</button>
      <button onClick={sortDescending}>Sort Z-A</button>
      <ul>
        {elves && elves.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question1;
