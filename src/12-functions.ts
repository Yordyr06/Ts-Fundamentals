(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  function createProduct(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    } 
  }

  const newProduct = createProduct('GamePad', new Date(), 12, 'M')
  console.log(newProduct);

  const anotherWay = (
    title: string,
    createAt: Date,
    size: Sizes,
    stock?: number
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const newWay = anotherWay('West', new Date(), 'S');
  console.log(newWay);  
})() 