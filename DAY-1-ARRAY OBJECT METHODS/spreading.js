// spread

// const car = ["thar","scorpio","fortuner","verna"];

// const name = ["krushnal","meet","amit","kartik"];

// const total = [...car, ...name];

// console.log(total)

// object 

const person1 = {
    name:"rashmika",
    age:"25",
    city:"mumbai",
};
const person2 = {
    name1:"shradha",
    age1:"27",
    city1:"mumbai",
};

const peopleData = {...person1, ...person2};

console.log(peopleData);


const item1 = {
    number1:"one",
    number2:"two"
};

const item2 = {
    ...item1,
    number3:"three"
};

console.log(item2)