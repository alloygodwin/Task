try {
  const x = 5;
  const z = x + y;    //error occurs because y is undefined
  console.log(z);
} catch(error) {
  console.log(error);  // Handle the error here.
}