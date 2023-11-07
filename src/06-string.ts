(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('My product title: ', productTitle);

  const productDescription = " I'm bla blab bla bla" 
  console.log('Description: ', productDescription)

  let productPrice = 100;
  let isNew: boolean = true;

  const summary: string = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('Summary: ', summary);

  const myString: String = ''; // Asignas el objeto String al tipo de la variable (mala practica)
  const my_string: string = ''; // Asignas el tipo string a la variable
})();