class Device {
    constructor(name, power) {
        this.name = name
        this.power = power || null
    }
    getPower(power) {
        if (power !== null) {
            console.log(`Power is ${power}`)
        } else {
            console.log(`Device is off`)
        }
    }
}

const lamp = new Device('Lamp', 5)
console.log(lamp)

class ComputerDevice extends Device {
    constructor(brand, name, power) {
        super(name, power)
        this.brand = brand
        this.getPower = function (power) {
            if (power !== null) {
                console.log(`${brand} power is ${power}`)
            } else {
                super.getPower()
            }
        }
    }
}


// Код верно переписан с функций-конструкторов на классы, но проблемы, которые я описала в предыдущем задании, актуальны и здесь

