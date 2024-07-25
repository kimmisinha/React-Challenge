import React, { useState } from 'react';

function Question8() {
  const animals = ['lion', 'tiger', 'bear', 'monkey', 'panda', 'zebra', 'giraffe'];
  const [addanimal, setaddanimal] = useState("");

  function AnimalInventor() {
    const animal1 = animals[Math.floor(Math.random() * animals.length)];
    const remainingAnimals = animals.filter(animal => animal !== animal1);
    const animal2 = remainingAnimals[Math.floor(Math.random() * remainingAnimals.length)];
    const combinedName = animal1.slice(0, -2) + animal2.slice(2);

    // console.log("Animal1:", animal1, "Animal2:", animal2, "Combined Name:", combinedName);
    setaddanimal(combinedName);
  }

  return (
    <div>
      <h1>Animal Name Here</h1>
      <p>{addanimal}</p>
      <button onClick={AnimalInventor}>New Animal</button>
    </div>
  );
}

export default Question8;

/*
Puzzle #8: Animal Inventor 🦜
Create an animal inventor app that combines the names of two animals in an array. 
To complete this task you must: Remove the last two characters of the first animal’s
name, Remove the first two characters of the second animal’s name, Ensure that the 
same animal name is not used twice. Example output: panbra (panda+zebra)
 */
