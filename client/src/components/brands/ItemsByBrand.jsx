import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemsByBrand = () => {
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

  return <div>items here</div>;
};
