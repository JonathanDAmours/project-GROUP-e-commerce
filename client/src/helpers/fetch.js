//get all items
export const fetchItems = async () => {
  try {
    let data = await fetch("/items");
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

//get 1 item based on its id (we'll probably need to use useParams to get the id)
export const fetchItemById = async (id) => {
  try {
    let data = await fetch(`/items/${id}`);
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// get all brands
export const fetchBrands = async () => {
  try {
    let data = await fetch("/companies");
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// get one brand based on its Id (we'll probably need to use useParams to get the id)
export const fetchBrandbyId = async (id) => {
  try {
    let data = await fetch(`/companies/${id}`);
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// get all categories
export const fetchCategories = async () => {
  try {
    let data = await fetch("/categories");
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
