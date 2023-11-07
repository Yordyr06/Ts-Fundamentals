(() => {
  let prices = [1, 2, 3, 4, 5];
  // prices.push('hello');
  // prices.push(true);
  // prices.push({});
  prices.push(6)

  let products = ["Hello", true]
  products.push(false);

  let mixed: (number | string | Object )[] = []
  mixed.push(0);
  mixed.push("Hello World");
  mixed.push(true);
  mixed.push([]);
  mixed.push({});

  let numbers = [1, 2, 3, 4, 5];
  numbers.map(item => item * 2);
})();