import React, { useState } from "react";
import almond from "../../src/assest/almond.jpeg";
import cinnamon from "../../src/assest/cinnamon.jpeg";
import dark from "../../src/assest/dark.jpeg";
import regular from "../../src/assest/images.jpeg";
import marshmallows from "../../src/assest/marshmallows.jpeg";
import skim from "../../src/assest/skim.jpeg";
import whippedCream from "../../src/assest/whippedCream.jpeg";
import white from "../../src/assest/white.jpeg";
import whole from "../../src/assest/whole.jpeg";
import './Question3.css';  

function Question3() {
  const [mix, setMix] = useState("regular");
  const [milk, setMilk] = useState("whole");
  const [toppings, setToppings] = useState("marshmallows");

  const hotChocolateImages = {
    regular,
    dark,
    white,
  };

  const milkImages = {
    whole,
    skim,
    almond,
  };

  const toppingImages = {
    marshmallows,
    whippedCream,
    cinnamon,
  };

  // Determine the image sources based on selections
  const hotChocolateImage = hotChocolateImages[mix];
  const milkImage = milkImages[milk];
  const toppingImage = toppingImages[toppings];

  return (
    <div className="container">
      <h1>Hot Chocolate Customizer</h1>
      <form>
        {/* Option select */}
        <div>
          <label htmlFor="mix">Select Hot Chocolate Mix:</label>
          <select id="mix" value={mix} onChange={(e) => setMix(e.target.value)}>
            <option value="regular">Regular</option>
            <option value="dark">Dark</option>
            <option value="white">White</option>
          </select>
        </div>
        {/* Option select */}
        <div>
          <label htmlFor="milk">Select Milk:</label>
          <select id="milk" value={milk} onChange={(e) => setMilk(e.target.value)}>
            <option value="whole">Whole</option>
            <option value="skim">Skim</option>
            <option value="almond">Almond</option>
          </select>
        </div>
        {/* Option select */}
        <div>
          <label htmlFor="toppings">Select Toppings:</label>
          <select id="toppings" value={toppings} onChange={(e) => setToppings(e.target.value)}>
            <option value="marshmallows">Marshmallows</option>
            <option value="whippedCream">Whipped Cream</option>
            <option value="cinnamon">Cinnamon</option>
          </select>
        </div>
      </form>

      <p>
        Your hot chocolate: {mix} with {milk} milk and {toppings} on top.
      </p>
      <div>
        <img src={hotChocolateImage} alt={`${mix} hot chocolate`} />
        <img src={milkImage} alt={`${milk} milk`} />
        <img src={toppingImage} alt={`${toppings} topping`} />
      </div>
    </div>
  );
}

export default Question3;
