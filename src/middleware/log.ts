import { Request, Response, NextFunction } from 'express';
//log middleware
export function logMiddleware(req: Request, res: Response, next: NextFunction) {
  // tslint:disable-next-line: no-console
  console.log('Time:', Date.now());
  next();
}
