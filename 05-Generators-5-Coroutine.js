
const co = require("co")

const doAsync = function (id, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`<${id}>`)
        }, 200)
    })
}

const make = co.wrap(function* (id) {
    let x1 = yield doAsync(1)
    let x2 = yield doAsync(2)
    let x3 = yield doAsync(3)
    return `${id}:${x1},${x2},${x3}`
})

make("foo").then((x) => console.log(x))

