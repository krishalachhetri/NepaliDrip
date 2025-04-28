import React from "react";
import Item from "../Components/Item/Item";
import all_product from "../Components/Assets/all_product";

const Women = () => {
  const womenProducts = all_product.filter(item => item.category === "women");

  return (
    <div className="products-page">
      <h2>Women's Traditional Wear</h2>
      <div className="items-container">
        {womenProducts.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Women;
