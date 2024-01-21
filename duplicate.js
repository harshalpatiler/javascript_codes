let arr = [1, 2, 3]
function duplicate(ele){
    return ele.concat(ele)
}
console.log(duplicate(arr));
arr.length = 0
console.log(arr.length)

