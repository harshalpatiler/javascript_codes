let name = {
    fname: 'Harshal',
    lname: 'Patil',
    getFullName: function(){
        console.log(this.fname+ " " +this.lname);
    }
}
let _name = {
    fname: "Mukesh",
    lname: "Sharma"
}
function completeName(home){
    console.log(this.fname + " " + this.lname + ' ' + home)
}
//name.getFullName();
//name.getFullName.call(_name);
completeName.call(name,'Goa')
completeName.apply(_name, [ 'Balapur']);
// bind method returns a function that we can invoke later
let bindFun = completeName.bind(_name, "Shirpur")
bindFun();