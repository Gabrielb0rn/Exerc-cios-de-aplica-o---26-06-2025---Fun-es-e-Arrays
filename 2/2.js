function separaParImpar(nums) {
  let pares = [];
  let impares = [];

  for (let num of nums) {
    if (num % 2 === 0) {
      pares.push(num);
    } else {
      impares.push(num);
    }
  }

  return [pares, impares];
}

const numeros = [1,2,3,4,5,6,7,8];
console.log(separaParImpar(numeros));
