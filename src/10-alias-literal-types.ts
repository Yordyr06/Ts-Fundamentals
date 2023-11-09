(() => {
  type MyNewType = string | number;
  
  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'something else'; 
  
  function greeting(userId: MyNewType, size: Sizes) {
    if (typeof userId === 'string') {
      return console.log(`Hello ${userId}, your size is: ${size}`)
    }
  }

  greeting('Adam', 'S');
  greeting(150, 'XL');
})()