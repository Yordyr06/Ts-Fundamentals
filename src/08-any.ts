(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = undefined;
  myDynamicVar = ""
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = [];

  myDynamicVar = "Hello World"
  const rta01 = (myDynamicVar as string).toLowerCase();
  console.log(rta01);
  
  myDynamicVar = 1234567890;
  const rta02 = (<number>myDynamicVar).toFixed();
  console.log(rta02);
})()