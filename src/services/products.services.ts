import { v1 as uuid } from 'uuid';
import { Product } from '../models/product';
import { loadProducts } from '../data';
/* Service file - Function Logic*/

const getAll = async ():Promise<Product[]> => {
    const products = await loadProducts();
    return Promise.resolve(products);
}
const getById = async (id:string): Promise<Product> => {
    const products = await loadProducts();
    const matching:Product = <Product> products.find(o => o.id === id);
    return Promise.resolve(matching);
}

const addProduct = async (product:Product):Promise<Product> => {
    const products = await loadProducts();
    product.id = uuid();
    products.push(product);
    return Promise.resolve(product);
}

const updateProduct = async(product:Product,id:string) :Promise<Product> => {
    const matching = await getById(id);
    matching.name = product.name ? product.name : matching.name;
    return Promise.resolve(matching);
}
const deleteProduct = async(id:string) :Promise<Product> => {
    const products = await loadProducts();
    const findIndex = products.findIndex(o => o.id === id);
    if (findIndex < 0)
        return Promise.reject("Object do not exists.");
    const product:Product = products[findIndex];    
    products.splice(findIndex, 1);    
    return Promise.resolve(product);
}
export default { getAll,getById,addProduct,updateProduct,deleteProduct };