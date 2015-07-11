
const doAsync = function (id) {
    return `<${id}>`
}

var make = function* (id) {
    let x1 = yield doAsync(1)
    let x2 = yield doAsync(2)
    let x3 = yield doAsync(3)
    return `${id}:${x1},${x2},${x3}`
}

var g = make("foo")
var x1 = g.next()
console.log(x1)
var x2 = g.next(x1.value)
console.log(x2)
var x3 = g.next(x2.value)
console.log(x3)
var x4 = g.next(x3.value)
console.log(x4)

