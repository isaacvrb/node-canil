import { Request, Response } from 'express';

export function home(req: Request, res: Response) {
  res.send('home no controller!');
}

export function dogs(req: Request, res: Response) {}

export function cats(req: Request, res: Response) {}

export function fishes(req: Request, res: Response) {}
