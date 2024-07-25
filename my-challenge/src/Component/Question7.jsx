import React from "react";

function Question7() {
  const foodData = [
    {
      name: "Apple",
      calories: 95,
      fat: 0.3,
      protein: 1.3,
    },
    {
      name: "Banana",
      calories: 105,
      fat: 0.4,
      protein: 1.2,
    },
    {
      name: "Orange",
      calories: 85,
      fat: 0.2,
      protein: 1.1,
    },
    {
      name: "Carrots",
      calories: 50,
      fat: 0.1,
      protein: 0.9,
    },
    {
      name: "Rice",
      calories: 215,
      fat: 0.4,
      protein: 4.3,
    },
    {
      name: "Chicken",
      calories: 165,
      fat: 3.6,
      protein: 31.1,
    },
  ];
  // TODO: Define a function that returns a table element displaying
  // the data for each food in the foodData array
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Fat</th>
            <th>Protein</th>
          </tr>
        </thead>
        <tbody>
          {foodData &&
            foodData.map((ele, index) => (
              <tr key={index}>
                {/* Correctly render each piece of food data in its own table cell */}
                <td>{ele.name}</td>
                <td>{ele.calories}</td>
                <td>{ele.fat}</td>
                <td>{ele.protein}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Question7;

/*
Puzzle #7: Nutrition Table 🍎
Create a React application that displays nutritional facts about different 
foods in an organized table.
*/
