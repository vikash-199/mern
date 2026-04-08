const fibbonacci = (n) => {
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
};

fibbonacci(6);
