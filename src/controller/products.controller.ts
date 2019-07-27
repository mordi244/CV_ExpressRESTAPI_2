import { Request, Response, NextFunction, Router } from 'express';
import { Product } from '../models/product';
import productsService  from '../services/products.services';

//get all products from service object
const getAll = async (req:Request,res:Response) => {
    const products = await productsService.getAll();
    res.send(products);
}
//get product by id from service object
const getById = async (req:Request,res:Response) => {
    const product = await productsService.getById(req.params.id);
    res.send(product);
}
//post new product from service object
const addProduct = async (req:Request,res:Response) => {
    const productToAdd = await productsService.addProduct(req.body as Product);
    res.status(201).send(productToAdd);
}
//update product from service object
const updateProduct = async (req:Request,res:Response) => {
    const productToUpdate = await productsService.updateProduct(req.body as Product,req.params.id);
    res.status(201).send(productToUpdate);
}
//delete product from service object
const deleteCategory = async (req:Request,res:Response) => {
    console.log("in delete");
    const product = await productsService.deleteProduct(req.params.id);
    res.send(product);
}
export default { getAll,getById,addProduct,updateProduct,deleteCategory };