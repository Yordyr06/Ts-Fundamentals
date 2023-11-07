(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log("productPrice: ", productPrice);
  
  let costumerAge: number = 26;
  // costumerAge = costumerAge + "1"; // 261
  costumerAge = costumerAge + 1; // 27
  console.log("costumerAge: ", costumerAge);

  let productInStock: number;
  console.log("productInStock: ", productInStock)
  if (productInStock > 10) {
    console.log("is greater")
  };

  let discount = parseInt("125")
  console.log("discount: ", discount)
  if (discount <= 200) {
    console.log("apply");
  } else {
    console.log("not apply")
  };

  let hex = 0xfff;
  let bin = 0b101010;
  let oct = 0o01234567;
  console.log(hex, bin, oct);

  const myNumber: Number = 10; // Asignas el objeto Number al tipo de la variable (mala practica)
  const my_number: number = 10; // Asignas el tipo numero a la variable
})();