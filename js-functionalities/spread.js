//inorder to avoid repeating of the same code or combine arrays of objects easily....

const arr = ['one', 'two'];
const arr2 = ['a', ...arr]; // spreads the arr into discrete elements as a part of arr2

console.log(arr2); //prints a, one, two

const obj = {
    id : 2,
    password : 1234
}

const keyName = "xyz"
const keyValue = 123

const obj2 = {
    fname : 'hamza',
    lname : 'ravani',
    ...obj,
    [keyName] : keyValue
}

console.log(obj2);
//  prints
//   {
//     fname: 'hamza',
//     lname: 'ravani',
//     id: 2,
//     password: 1234,
//     address: 'street-4, planet 001'
//   }