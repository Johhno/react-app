const square = function (number) {
    return number * number;
}

const squareBis = number => number * number;

console.log(square(5));
console.log(squareBis(5));


const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true }
]

//const activeJobs = jobs.filter(function (job) { return job.isActive; })
const activeJobsBis = jobs.filter(job => job.isActive == false)

console.log(activeJobsBis);