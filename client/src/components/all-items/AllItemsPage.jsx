import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Items from "./Items";

const AllItemsPage = () => {
  const [items, setItems] = useState([]);
  //limit is the amount of items per page
  const [limit, setLimit] = useState(50);
  // offset is the index we have to start rendering items at for pages 2,3, etc.
  const [offset, setOffset] = useState(0);

  //handlers
  const fetchItems = async (limit, offset) => {
    try {
      let data = await fetch(`/items?limit=${limit}&skip=${offset}`);
      data = await data.json();
      let items = data.data;
      setItems(items);
      console.log(items);
    } catch (err) {
      console.log(err);
    }
  };

  const nextPage = () => {
    setOffset(offset + 50);
  };

  const previousPage = () => {
    setOffset(offset - 50);
  };

  useEffect(() => {
    fetchItems(limit, offset);
  }, [offset, setOffset]);

  if (!items) {
    return <p>loading...</p>;
  }

  return (
    <>
      <div>
        <span>
          <button disabled={offset === 0 ? true : false} onClick={previousPage}>
            previous page
          </button>
        </span>
        <span>
          <button onClick={nextPage}>next page</button>
        </span>
      </div>
      {items.map((item) => {
        return <Items key={item._id} item={item} />;
      })}
      <div>
        <span>
          <button disabled={offset === 0 ? true : false} onClick={previousPage}>
            previous page
          </button>
        </span>
        <span>
          <button onClick={nextPage}>next page</button>
        </span>
      </div>
    </>
  );
};
export default AllItemsPage;
