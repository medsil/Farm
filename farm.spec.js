 // test adds wheat, sugarcane, some cows, some horses and a pig
const {Wheat, Sugarcane} = require('./crops')
const {Cow, Horse, Pig} = require('./animals')
const {Farm} = require('./index')

test('The farm income of a 100 Wheat + 100 Sugarcane + 6 Cow + 5 Horse + 10 Pig is X', () => {
    const farm = new Farm('TEST_NAME')
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(100))
    farm.addAnimal(new Cow(6))
    farm.addAnimal(new Horse(5))
    farm.addAnimal(new Pig(10))
    
    expect(farm.calculateIncome()).toBeCloseTo(2140.379, 1)
  })

 
//   const report = [['----------------------'],
//   [`- Farm:  ${farm.name} -`],
//   [`- No. of crops: ${farm.crops.length} -`],
//   [`- No. of animals: ${farm.animals.length} -`],
//   [`- Total income: ${farm.calculateIncome()} -`],
//   ['----------------------']
// ]
// console.log(report)