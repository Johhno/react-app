// can be called
// var => function
// const - let => block

const person = {
    talk() {

        var self = this;
        setTimeout(function () {
            console.log("self", self);
        }, 1000);

    }
};

const personBis = {
    talk() {

        var self = this;
        setTimeout(() => {
            console.log("this", this);
        }, 1);

    }
};

person.talk();

