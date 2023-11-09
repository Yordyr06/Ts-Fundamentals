(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'yoalmonte@outlook.com',
    password: '************',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  const products: any[] = [];

  const anotherArrowFn = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }): void => {
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