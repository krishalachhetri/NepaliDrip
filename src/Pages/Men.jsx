import React from "react";
import Item from "../Components/Item/Item";
import all_product from "../Components/Assets/all_product";

const Men = () => {
  const menProducts = all_product.filter(item => item.category === "men");

  return (
    <div className="products-page">
      <h2 >Men's Traditional Wear</h2>
      <div className="items-container">
        {menProducts.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Men;
