let str = "hey man how are you ?";
 function flwCap(str){
  return  str.split(" ").map( v=> v.charAt(0).toUpperCase()+ v.substring(1)).join(" ")
 }
 console.log(flwCap(str)) 