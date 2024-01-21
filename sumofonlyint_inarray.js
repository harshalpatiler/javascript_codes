let arr = [ 1, "the", 15, 9, "man", "ale"]

let sum = 0;
arr.forEach((val)=>{
    if(typeof val == "number"){
       sum =  sum+val
    }
    return sum;
})
console.log(sum)