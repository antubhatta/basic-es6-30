// const numbers =[1,6,4,8]
// for(const num of numbers){
//     console.log(num)
// }
// const nobab ='antu bhatta'
// for(const names of nobab){
//     console.log(names)
// }
const glass= {name:'glass',color: 'golden', price:12, isClean:true}
for(const water in glass){
    const values=glass[water]
    console.log(values)
}
// optional
const key=Object.keys(glass)
const value=glass[key]
console.log(key,value)

for(const keyms of keys){
    console.log(keyms)
}