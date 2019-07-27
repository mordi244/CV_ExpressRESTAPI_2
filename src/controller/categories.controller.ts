import { Request, Response } from 'express';
import { Category } from '../models/category';
import categoryService from '../services/categories.services';

//get all categories from service object
const getAll = async (req: Request, res: Response) => {
    const categories = await categoryService.getAll();
    res.send(categories);
}
//get category by id from service object
const getById = async (req: Request, res: Response) => {
    const category = await categoryService.getById(req.params.id);
    res.send(category);
}
//get all products for speciefic category from service object
const getProductByCatId = async (req: Request, res: Response) => {
    const products = await categoryService.getProductByCatId(req.params.id);
    res.send(products);
}
//post new category from service object
const addCategory = async (req: Request, res: Response) => {
    const categoryToAdd = await categoryService.addCategory(req.body as Category);
    res.status(201).send(categoryToAdd);
}
//update category from service object
const updateCategory = async (req: Request, res: Response) => {
    const categoryToUpdate = await categoryService.updateCategory(req.body as Category, req.params.id);
    res.status(201).send(categoryToUpdate);
}
//delete category from service object
const deleteCategory = async (req: Request, res: Response) => {
    const category = await categoryService.deleteCategory(req.params.id);
    res.send(category);
}

export default { getAll, getById, getProductByCatId, addCategory, updateCategory, deleteCategory };