import { Request, Response, NextFunction } from 'express';
import { CalculatorRequestBody } from '../types';

export function validateCalculatorRequest(
    req: Request<{}, any, CalculatorRequestBody>,
    res: Response,
    next: NextFunction
  ): void {
    const { operator, operand1, operand2 } = req.body;
  
    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
      res.status(400).send('Operands must be numbers');
      return;
    }
  
    if (!['+', '-', '*', '/'].includes(operator)) {
      res.status(400).send('Operator must be +, -, *, or /');
      return;
    }
  
    next();
  }