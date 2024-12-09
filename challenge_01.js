// challenge #1: Fist gift repeated 
/**
 * Santa Claus 🎅 has received a list of magical numbers representing gifts 🎁, but some of them are duplicated and must be removed to avoid confusion. Additionally, the gifts must be sorted in ascending order before being delivered to the elves.

Your task is to write a function that receives a list of integers (which may include duplicates) and returns a new list without duplicates, sorted in ascending order.

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// There are no gifts, the list remains empty
* 
 * 
 * 
 * 
*/

function prepareGifts(gifts) {
    // Code here
    let mySet = new Set(gifts)
    let myArray = [...mySet]
    return myArray.sort((a,b)=>a-b)
}
let gifts1 = [3, 1, 2, 3, 4, 2, 5]

let gifts2 = [6, 5, 5, 5, 5]

let gifts3 = []

console.log( "regalo #1: "+gifts1+" después: " +prepareGifts(gifts1))
console.log( "regalo #2: " +gifts2+" después: " +prepareGifts(gifts2))
console.log( "regalo #3: " +gifts3+" después: " +prepareGifts(gifts3))