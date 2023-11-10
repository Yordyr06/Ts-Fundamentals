import { Product } from './product.model'

export const products: Product[] = [];

export const anotherArrowFn = (data: Product): void => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0
  products.forEach((item) => total += item.stock);
  return total
} 