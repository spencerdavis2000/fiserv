import { NextFunction, Request, Response } from 'express';

/**
 *
 * @param err (Error)
 * @param _req (Request)
 * @param res (Response)
 * @param next (NextFunction)
 * A Catch All error handler for anything that goes wrong with application
 */
export function errorCatchAllHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  const errorMessage = {
    error: {
      code: err.name,
      message: err.message,
      innerError: {
        requestId: 'request-id',
        date: new Date(),
      },
    },
  };
  res.status(500).json(errorMessage).end();
  next();
}
