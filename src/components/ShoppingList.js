import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCat] = useState("All");
  
  function selectionFunc(e) {
    setSelectedCat(e.target.value)
  }
  const displayItems = items.filter(item =>{
    if (selectedCategory == "All") return true
    else return (selectedCategory == item.category)
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectionFunc}  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}


      </ul>
    </div>
  );
}

export default ShoppingList;
