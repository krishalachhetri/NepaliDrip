import React from "react";
import Item from "../Components/Item/Item";
import all_product from "../Components/Assets/all_product";

const Kids = () => {
  const kidsProducts = all_product.filter(item => item.category === "kid");

  return (
    <div className="products-page">
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize:"300 px"}}>Kids' Traditional Wear</h2>
      <div className="items-container">
        {kidsProducts.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Kids;
