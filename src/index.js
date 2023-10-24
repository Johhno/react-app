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

person.talk();

