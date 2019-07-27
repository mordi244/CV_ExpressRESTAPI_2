import { Request, Response, Router } from 'express';
import { myProdGetValidation, myPostValidation } from '../validations/routesValidations';
import productController from '../controller/products.controller';

const prodRouter = Router();

//Get all products
prodRouter.get("/",productController.getAll);

//Get product with speciefic id
prodRouter.get('/:id', myProdGetValidation,productController.getById);

//Add new product
prodRouter.post('/', myPostValidation, productController.addProduct);

//Update existing product
prodRouter.put('/:id', myProdGetValidation, myPostValidation,productController.updateProduct);

//Delete product
prodRouter.delete('/:id', myProdGetValidation, productController.deleteCategory);


export { prodRouter };

