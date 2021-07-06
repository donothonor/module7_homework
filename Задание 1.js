function showOwnKeysAndValues (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key - ${key}, value - ${obj[key]}`)
        }
    }
}
