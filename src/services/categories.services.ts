import { v1 as uuid } from 'uuid';
import { Category } from '../models/category';
import { Product } from '../models/product';
import {  loadCategories } from '../data';
/* Service File - Functions Logic*/
//get all categories 
const getAll = async ():Promise<Category[]> => {
    const categories = await loadCategories();
    return Promise.resolve(categories);
}
// get categories by category id
const getById = async (id:string): Promise<Category> => {
    const categories = await getAll();
    const matching:Category = <Category> categories.find(o => o.id === id);
    return Promise.resolve(matching);
}
//get all products of speciefic category
const getProductByCatId = async (id:string) :Promise<Product[]> => {
    const categories = await getAll();
    const matching:Category = <Category> categories.find(o => o.id === id);
    return Promise.resolve(matching.products);
}
//post new category
const addCategory = async (category:Category):Promise<Category> => {
    const categories = await getAll();
    category.id = uuid();
    const products:Product[] = [];
    category.products = products;
    categories.push(category);
    console.log("category added in services : "+category);
    return Promise.resolve(category);
}
//update category
const updateCategory = async(category:Category,id:string) :Promise<Category> => {
    const matching = await getById(id);
    matching.name = category.name ? category.name : matching.name;
    return Promise.resolve(matching);
}
//delete category
const deleteCategory = async(id:string) :Promise<Category> => {
    const categories = await getAll();
    const findIndex = categories.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject("Object do not exists.");
    const category:Category = categories[findIndex];    
    categories.splice(findIndex, 1);    
    return Promise.resolve(category);
}
export default { getAll,getById,getProductByCatId,addCategory,updateCategory,deleteCategory } ;


