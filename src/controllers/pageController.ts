import { Request, Response } from 'express';
import { createMenuObjects } from '../helpers/createMenuObjects';
import { Pet } from '../models/pet';

export function home(req: Request, res: Response) {
  let list = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObjects('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    list,
  });
}

export function dogs(req: Request, res: Response) {
  let list = Pet.getFromType('dog');

  res.render('pages/page', {
    menu: createMenuObjects('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  });
}

export function cats(req: Request, res: Response) {
  let list = Pet.getFromType('cat');

  res.render('pages/page', {
    menu: createMenuObjects('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    list,
  });
}

export function fishes(req: Request, res: Response) {
  let list = Pet.getFromType('fish');

  res.render('pages/page', {
    menu: createMenuObjects('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    list,
  });
}
