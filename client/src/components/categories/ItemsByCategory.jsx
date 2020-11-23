import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../all-items/items";

export const ItemsByCategory = () => {
  const { categoryName } = useParams();
  const [itemsByCategory, setItemsByCategory] = useState([]);
  console.log(itemsByCategory);

  useEffect(() => {
    const fetchCategoryByCategoryName = async () => {
      try {
        let data = await fetch(`/categories/${categoryName}`);
        data = await data.json();
        console.log(data);
        const items = data.data;
        setItemsByCategory(items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoryByCategoryName();
  }, [categoryName]);

  return (
    <div>
      {itemsByCategory.map((item) => {
        return <Items key={item._id} item={item} />;
      })}
      ;
    </div>
  );
};
