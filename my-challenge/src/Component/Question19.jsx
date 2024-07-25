import React from 'react';

const recipes = [
  {
    name: 'Pancakes',
    ingredients: ['flour', 'milk', 'eggs']
  },
  {
    name: 'Omelette',
    ingredients: ['eggs', 'cheese', 'onion']
  },
  {
    name: 'Smoothie',
    ingredients: ['bananas', 'strawberries', 'yogurt']
  }
];

function Question19() {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.name}</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question19;

/*
Puzzle #19: Recipe List 🍅
Create a React App that displays a list of recipes, each containing a name and a 
list of ingredients. The recipes should be stored in an array called recipes within 
the component
*/
