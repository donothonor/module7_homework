function Device (name, power) {
    this.name = name
		this.power = power || null
    }
Device.prototype.getPower = function (power) {
		if(power !== null) {
		console.log(`Power is ${power}`)
		} else {
			console.log(`Device is off`)
		}
}

const lamp = new Device('Lamp', 5)
console.log(lamp)

function ComputerDevice (brand) {
	this.brand = brand
	this.getPower = function (power) {
		if(power !== null) {
		console.log(`${brand} power is ${power}`)
		} else {
			console.log(`Device is off`)
		}
	}
}

ComputerDevice.prototype = new Device ()

const intel = new ComputerDevice('Intel')

lamp.getPower(5)



