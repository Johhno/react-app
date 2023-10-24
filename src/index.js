const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];

const clone = [...first];
console.log(first);
console.log(clone);

const premier = { name: 'John' };
const seconde = { job: 'instructeur' };

const combiné = { ...premier, ...seconde, location: 'Australia' };
const cloneCombiné = { ...premier };
console.log(combiné);
console.log(cloneCombiné);
