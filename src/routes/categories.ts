import { Router } from 'express';
import { myAsyncGetValidation } from '../validations/routesValidations';
import categoriesController from '../controller/categories.controller';

const categRouter = Router();

//Get all categories
categRouter.get("/", categoriesController.getAll);

//Get category with speciefic id
categRouter.get('/:id', myAsyncGetValidation, categoriesController.getById);

//Get all products for speciefic category
categRouter.get('/:id/products', myAsyncGetValidation, categoriesController.getProductByCatId);

//Add new category
categRouter.post('/', categoriesController.addCategory);


//Update existing category
categRouter.put('/:id', myAsyncGetValidation, categoriesController.updateCategory);

//Delete category
categRouter.delete('/:id', myAsyncGetValidation, categoriesController.deleteCategory);


//exporting categories router and products array.
export { categRouter };




