const fruits = ["apple", "banana", "cherry"];

console.log(fruits)

// destructure

const [one, two] = fruits;

// console.log(two)


// object

const person = {
    name:"alice",
    age:25,
    city:"new york"
}

// console.log(person.city)

const {name} = person;

console.log(name)