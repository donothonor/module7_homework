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

// Решение не совсем верное. По условию было необходимо создать родительский конструктор и 2 дочерних, которые используют родительский в качестве прототипа. У вас есть только один дочерний конструктор (ComputerDevice), lamp - это просто экземпляр родительского класса. Также нет функций для включения/выключения прибора из розетки. getPower - это функция с другим функционалом, она выводит значение одного из свойств. Чтобы реализовать включение/выключение, у каждого объекта должно быть специальное свойство, которое отвечает за состояние вкл/выкл, а функции должны менять значение этого свойства.


