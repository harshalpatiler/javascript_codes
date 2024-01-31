function multiply(x){
    return function(y){
        console.log(x*y);
    } 
}
// let fun = multiply(4);
// fun(5);
multiply(8)(5)