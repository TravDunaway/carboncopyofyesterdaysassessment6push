const {shuffleArray} = require('./utils')
let testedArray = [100, 1000, 10000]
let testedArraythree = ['a', 'b', 'c', 'd']
let testedArrayTwo = []
let testedArrayFour = ["tringa", "stringb", "stringc"]
// for (let i = 0; i< 10; i++){
//    testedArraytwo = testedArray.push([i])
//     console.log(testedArraytwo)
// }


describe('shuffleArray function will do the following:', () => {
    test('checking array lenghts', () => {
        let arraythreelength = testedArraythree.length
        let shufflingArray = shuffleArray(testedArraythree)
        const shufflelength = shufflingArray.length
        expect(shufflelength).toBe(arraythreelength)
        // expect(shufflelength).toHaveLength(arraythreelength)
    })
})


describe('shuffleArray should', () => {
    test('provides numbers from the shuffled array', () => 
    {
        expect(Array.isArray(shuffleArray(testedArrayTwo))).toBe(true)
        expect(Array.isArray(shuffleArray(testedArray))).toBe(true)
        expect(Array.isArray(shuffleArray(testedArraythree))).toBe(true)
        // expect(Array.isArray(shuffleArray(testedArrayTwo))).toBe(true)
    })
})

