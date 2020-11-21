import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Items from "./Items";

const AllItemsPage = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      let data = await fetch("/items");
      data = await data.json();
      let items = data.data;
      setItems(items);
      console.log(items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (!items) {
    return <p>loading...</p>;
  }

  return items.map((item) => {
    return <Items item={item} />;
  });
};
export default AllItemsPage;
