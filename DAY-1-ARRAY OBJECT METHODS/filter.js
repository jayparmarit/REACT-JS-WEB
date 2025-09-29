const number = [1,2,3,4,5,6,7,8,9];

const even = number.filter((x) => x % 3 == 0)

console.log(even);

const personData = [
    {
        name:"alice",
        age:15,
        city:"bvn",
    },
    {
        name:"sana",
        age:18,
        city:"ahm",
    },
    {
        name:"john",
        age:22,
        city:"srt",
    },
    {
        name:"seraa",
        age:19,
        city:"mbm",
    },
];


const eligibleperson = personData.filter((person) => person.age > 18);

console.log(eligibleperson);