export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Peliculas',
    price: 799,
    description: 'Peliculas de todos los generos'
  },
  {
    id: 2,
    name: 'Series',
    price: 999,
    description: 'Series para toda la familia'
  },
  {
    id: 3,
    name: 'Documentales',
    price: 299,
    description: 'Conoce e investiga'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/