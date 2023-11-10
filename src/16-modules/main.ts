import { products, anotherArrowFn, calcStock } from './product.services'

anotherArrowFn({
  title: 'GameCube',
  createAt: new Date(),
  stock: 15,
});

anotherArrowFn({
  title: 'Play Station',
  createAt: new Date(),
  stock: 15,
  size: 'M'
});

console.log(products)

const total = calcStock()
console.log(total);