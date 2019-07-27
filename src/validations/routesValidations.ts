/* Validation functions for category and product routes */
import { Request, Response, NextFunction } from 'express';
import { getOrThrow } from '../validations/index';
import { IdSchema } from '../validations/general';
import { productPostSchema } from '../validations/product';

/* -------------------Category Validations--------------- */

//validate if exists and length of id
async function myAsyncGetValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const obj = {
      "id": req.params.id
    };
    //id length validation with joi
    getOrThrow(obj, IdSchema);
    next();
  } catch (err) {
    err.name = "IdValidationError";
    next(err);
  }
}

/* -------------------Product Validations--------------- */

//Validate if products exist and id length
async function myProdGetValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const obj = {
      "id": req.params.id
    };
    //id length validation with joi
    getOrThrow(obj, IdSchema);
    next();
  }
  catch (err) {
    err.name = "IdValidationError";
    next(err);
  }
}

//Validate length of name
function myPostValidation(req: Request, res: Response, next: NextFunction) {
  try {
    console.log("req body : ");
    console.log(req.body);
    const obj = {
      "name": req.body.name
    };
    getOrThrow(obj, productPostSchema);
    next();
  }
  catch (err) {
    err.name = "NameValidationError";
    next(err);
  }
}

export { myPostValidation, myProdGetValidation, myAsyncGetValidation };




