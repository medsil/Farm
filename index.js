// index.js

class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  addAnimal(animal) {
    this.animals.push(animal)
  }

  calculateIncome() {
      let yield1 = this.crops.map(crop => crop.getYieldInEuros()).reduce((a,b) => a + b, 0)

      let yield2 = this.animals.map(animal => animal.getValueInEuros()).reduce((a,b) => a + b, 0)

    return (yield1 + yield2)
  }

}

module.exports.Farm = Farm