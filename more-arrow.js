const getAge =person =>person.age
const student ={name:'antu bhatta', age:45}
const age =getAge(student)
console.log(age)

const getThird =number =>number[4]
const getNumbers= getThird([4,66,33,22,55,76,43])
console.log(getNumbers)

// const getPI=()=>Math.PI
// console.log(getPI().toFixed(2))
const getPI=()=>Math.PI
console.log(getPI().toFixed(2))