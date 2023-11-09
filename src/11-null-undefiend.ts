(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined; 

  let exampleNull: number | null = null;
  let exampleUndefined: string | undefined = undefined;

  const hi = (name: string | null) => {
    let hi = 'Hi ';
    if (name) {
      hi += name
    } else {
      hi += 'nobody'
    }

    console.log(hi)
  }

  const hello = (name: string | null) => {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || 'nobody;'
    console.log(hello);
  }

  const greeting = (name: string | null) => {
    let greeting = 'Hello ';
    name ? greeting += name : greeting += 'nobody';
    console.log(greeting);
  }

  hi("Yordy");
  hello(null);
  greeting("Nobody");
})()