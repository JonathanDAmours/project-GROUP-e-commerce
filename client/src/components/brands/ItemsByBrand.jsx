import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemsByBrand = () => {
  const [brandItems, setBrandItems] = useState([]);

  const { companyId } = useParams();
  console.log(companyId);

  useEffect(() => {
    const fetchBrandbyId = async () => {
      try {
        let data = await fetch(`/companies/${companyId}`);
        data = await data.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBrandbyId();
  }, [companyId]);

  return <div>items by brand here</div>;
};
