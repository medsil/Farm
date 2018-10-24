// animals
class Animal {
    constructor(age) {
        this.age = age
    }
    getValueInEuros(){
        return this.getWeightInKg() * this.price
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age)
        this.age = 0
        this.price = 5
    }
    getWeightInKg() {
        return Math.min(this.age * 1.5, 1200)
    }
}

class Horse extends Animal {
    constructor(age) {
        super(age)
        this.age = 0
        this.price = 10
    }
    getWeightInKg() {
        return Math.min(this.age * 1.7, 1000)
    }
}

class Pig extends Animal {
    constructor(age) {
        super(age)
        this.age = 0
        this.price = 4
    }
    getWeightInKg() {
        return Math.min(this.age * 2.3, 700)
    }
}

module.exports = { Pig, Horse, Cow }