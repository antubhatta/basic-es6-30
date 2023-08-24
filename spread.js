const max=Math.max(3,2,65,43,32,76,98,65,99)
// console.log(max)
const min=Math.min(4,3,78,66,54,24,87)
// console.log(min)
const numbers=[3,2,76,55,47,66,575,44]
const maxNumbers=Math.max(...numbers)
// console.log(maxNumbers)
// console.log(...numbers)

const friends= [9,3,5,6,4,55,3]
const bondhu= friends
const dosto =[...friends]
friends.push(4)
// console.log(friends)
// console.log(bondhu)
// console.log(dosto)

const actor = {
    name: 'mofiz ullah',
    age: 23,
    phone:' 01874930395',
    location: 'prithibir bhaire'
}
const {phone,age}= actor
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(age)
// console.log(age)
// console.log(age)

// function double them
const result = (a,b)=> [a*4,b*7]
const [first,second]= result(4,6)
console.log(first,second)