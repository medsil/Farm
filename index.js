// index.js

class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  calculateIncome() {
    return this.crops.map(crop => crop.getYieldInEuros())
  }

}


module.exports.Farm = Farm