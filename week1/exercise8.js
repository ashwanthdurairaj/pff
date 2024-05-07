const person = {
    name: 'Ashwanth',
    age: 21,
    greet: function(){
        console.log("Hello! My name is "+this.name+" and I am "+this.age+" years old")
    }
}

person.greet()