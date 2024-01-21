let str = "appllle";
function occurance(str){
    let obj = {};
    str.split("").forEach((v,i)=>{
        if(obj[v]) obj[v]+=1 ;
        else obj[v] = 1;
    })
    return obj;
}
console.log(occurance(str))