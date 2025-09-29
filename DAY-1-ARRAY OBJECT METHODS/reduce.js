// const number = [1,2,3,4,5,6,7,8,9];

// const total = number.reduce((acc, curr) => {
//     return acc + curr;
// });

// console.log(total);

// <------------------------------->

const products = [
    {
        name:"fruits",
        price:200,
        qty:15,
    },
    {
        name:"veggies",
        price:50,
        qty:10,
    },
    {
        name:"grocery",
        price:500,
        qty:5,
    },
];

const totalBill = products.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
}, 0)

console.log(totalBill);