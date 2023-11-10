(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = [];

  const anotherArrowFn = (data: Product): void => {
    products.push(data);
  }

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
})()