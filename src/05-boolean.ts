(() => {
  let isEnable = true;
  // isEnable = "string";
  // isEnable = 100;
  isEnable = false;

  let isNew: boolean = true;
  console.log("isNew: ", isNew);
  isNew = false;
  console.log("isNew: ", isNew);

  isNew = Math.random() >= 0.5 ? true : false

  const myBoolean: Boolean = true; // Asignas el objeto Boolean al tipo de la variable (mala practica)
  const my_boolean: boolean = true; // Asignas el tipo boolean a la variable
})();