
const curry = require("curry")

const getData = curry((id, cb) => {
	setTimeout(() => {
        if (id === 0)
            cb(new Error("invalid id"))
        else
            cb(null, `Data<${id}>`)
    })
})

getData(0,  (err, x) => console.log(err !== null ? err : x))
getData(42, (err, x) => console.log(err !== null ? err : x))

getData(0) ((err, x) => console.log(err !== null ? err : x))
getData(42)((err, x) => console.log(err !== null ? err : x))

