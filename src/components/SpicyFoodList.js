import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState('All');

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods((oldFoods) => [...oldFoods, newFood])
  }
  function handleRemoveFood(id) {
    setFoods((oldFoods) => oldFoods.map(food => food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food));
  }
  function handleFilter(ev) {
    setCuisine(ev.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foods.filter(food => {
        if (cuisine === 'All') return true;
        return food.cuisine === cuisine;
      }).map(food => <li key={food.id} onClick={() => handleRemoveFood(food.id)}>
        {food.name} || Cuisine: {food.cuisine} || Heat: {food.heatLevel}
      </li>)}</ul>
    </div>
  );
}

export default SpicyFoodList;
