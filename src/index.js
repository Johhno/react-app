class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("Je marche seul!. Dans les rues,");
    }
}

class Teacher extends Person {

    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher("John", 'BSc');
console.log(teacher.degree);