document.querySelector("#grandparent").addEventListener('click', () => {
        console.log("grandparent clicked");
    });
document.querySelector("#parent").addEventListener('click',() => {
        console.log("parent clicked");
    })
document.querySelector("#child").addEventListener('click',() => {
        console.log("child clicked");
    })

//  let divs = document.getElementsByTagName('div');
// for(let i = 0; i < divs.length ; i++){
//  divs[i].addEventListener('click',( )=>{
//  	console.log(divs[i].id+"clicked");
//      console.log(this.id+"clicked");
//  })
// }
