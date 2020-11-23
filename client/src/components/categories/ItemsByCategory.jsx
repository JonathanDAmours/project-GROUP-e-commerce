import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemsByCategory = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        let data = await fetch(`/categories/${id}`);
        data = await data.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoryById();
  }, [id]);

  return <div>Items here</div>;
};
