import { useEffect, useState } from "react";
import React from "react";

function Question1() {
  const [elves, setElves] = useState(['Buddy', 'Dobby', 'Winky', 'Bing', 'Bernard']);

  useEffect(()=>{
    setElves((prev)=>{
      return[...prev.sort()]
    })
  },[])
   function sortDescending(){
    setElves((prev)=>{
      return [...prev.sort().reverse()]
    })
   }
   console.log(elves)

  return (
    <div>
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

/*
Puzzle #1: Elf Name Sorter 🎄
Implement a component that displays a list of Santa's elves, sorted 
alphabetically by their names. Each elf's name should be displayed and when 
the order button is clicked, the list should be sorted in the opposite order 
(i.e. Z-A instead of A-Z).
*/

