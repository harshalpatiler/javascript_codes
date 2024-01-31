function multiply(x, y){
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3)
multiplyByTwo(3);
multiplyByThree(4);