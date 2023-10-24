

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Je marche seul!. Dans les rues,");
    }
}

const person = new Person("John");
console.log(person.name);