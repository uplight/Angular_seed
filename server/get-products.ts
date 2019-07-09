import {Request, Response} from 'express';
const PRODUCTS = require('./db.json');

export function getProducts(req: Request, res: Response) {
  res.json(PRODUCTS);
}
