let str = "abecesd";
function alphaOrder(str){
    return str.split("").sort().join('')
}
console.log(alphaOrder(str));