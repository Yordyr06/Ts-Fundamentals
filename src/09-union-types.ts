(() => {
  let userId: string | number;
  userId = 2313213;
  userId = "Hello World";

  function greeting(myCharacter: string | number) {
    if (typeof myCharacter === "string") {
      console.log(`My Character is a string: ${myCharacter.toLowerCase()}`);
    } else {
      console.log(`My Character is a number: ${myCharacter.toFixed(1)}`);
    }
  }

  greeting("Hello World");
  greeting(3.14);
})()