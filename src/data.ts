/* Load data from external json file */
import { Category } from './models/category';
import { Product } from './models/product';
import { v1 as uuid } from 'uuid';
const fetch = require('node-fetch');

const fullCategoryArr: Category[] = []; //full data about categoty - include products. 
const productsArr: Product[] = [];//all products

//load data from json file
 const loadProductsCatsFile = async (port:number) => {
  try {
    const jsonObj = await fetch('http://localhost:' + port + '/public/data.json'); //  served as static file
    const catObj = await jsonObj.json();
    catObj.categories.forEach((cat:Category) => { //loop over the categories
      cat.id = uuid(); //set id to category
      fullCategoryArr.push(cat); //add category ti categories array
      cat.products.forEach((prod:Product) => { //loop over the products of category
        prod.id = uuid(); //set id to product
        prod.categoryId = cat.id; //set the foreign key of product's categoryId to id of category
        productsArr.push(prod); //add product to products array
      });
    });
  } catch (err) {
    console.log(err);
  }
}

function loadCategories(): Promise<Category[]> {
  return Promise.resolve(fullCategoryArr);
}
function loadProducts(): Promise<Product[]> {
  return Promise.resolve(productsArr);
}
export { loadProductsCatsFile, fullCategoryArr, productsArr, loadCategories, loadProducts }