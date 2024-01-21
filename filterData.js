let arr = [{ name: "Harshal", gender:"male", add:"Dhule", age: 32},
             { name: "Kalyani", gender:"female", add:"Dublin", age: 29},
             { name: "Sanjay", gender:"male", add:"balapur", age: 52},
             { name: "Ratna", gender:"female", add:"bhampur", age: 42},
             { name: "Bhushan", gender:"male", add:"shirpur", age: 33}]  
  let filterdata = arr.filter( val => val.gender === "male").map(v => v.name)
  console.log(filterdata); 