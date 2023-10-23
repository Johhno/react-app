const person = {
    name: 'Hog',
    walk() {
        console.log(this + ' is walking')
    },
    talk() { }
};

person.walk();


const walk = person.walk.bind(person.name);
walk();