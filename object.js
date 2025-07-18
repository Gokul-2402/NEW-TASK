let person = {
    ID : 101,
    Name: "Gokul",
    Designation : "chennai",
    Single : true,

    address : {
        City : "chennai",
        pin: 600043,
        state : "Tamilnadu"
    },

    details : function(){
        return  `ID is ${this.ID} and name is ${this.Name} From ${this.Designation} and ${this.Single} City : ${this.address.City} PIN : ${this.address.pin} state : ${this.address.state}`

    }


}

console.log(`ID is ${person.ID} and name is ${person.Name} From ${person.Designation} and ${person.Single} City : ${person.address.City} PIN : ${person.address.pin} state : ${person.address.state}`);

console.log(person.details());