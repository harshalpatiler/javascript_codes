let str = "mon";
function pallindrome(ele){
    let reversedstr = ele.split("").reverse().join("")
    return ele === reversedstr ? "The string is Pallindrome" : "Not pallindrome" 
}
console.log(pallindrome(str));