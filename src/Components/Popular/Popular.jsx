import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import all_product from "../Assets/all_product";

const Popular = () => {
  return (
    <div className="popular">
      <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "700" }}>Popular in NepaliDrip</h2>
      <div className="items-container">
      {all_product
        .filter(item => [1, 2, 13, 16, 35, 31].includes(item.id))
        .map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

