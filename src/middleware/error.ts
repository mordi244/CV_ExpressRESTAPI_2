import { Request, Response, NextFunction } from 'express';

//id length error handler
export function idErrorHandler(err:Error,req:Request,res:Response,next:NextFunction) {
  if (err.name === "IdValidationError")
    res.status(400).send ({ error: 'Id Validation error' });
  next(err);
}
//name length error handler
export function nameErrorHandler(err:Error,req:Request,res:Response,next:NextFunction) {
  console.log("NAME ERROR");
  if (err.name === "NameValidationError")
    res.status(400).send ({ error: 'Name Validation error' });
  next(err);
}

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  // tslint:disable-next-line: no-console
  //console.log('THIS IS A CUSTOM ERROR HANDLER MIDDLEWARE - Log Errors');
  // tslint:disable-next-line: no-console
  console.error(err.stack);
  next(err);
}

//client error handler
export function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (!req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

//general error handler
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500);
  res.render('error', { error: err });
}

