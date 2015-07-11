
const makeData = (id, cb) => {
    setTimeout(() => {
        cb(`Data<${id}>`)
    }, 500)
}

const getData = (id) => {
    return new Promise((resolve, reject) => {
        try {
            makeData(id, (data) => {
                resolve(data)
            })
        }
        catch (ex) {
            reject(ex)
        }
    })
}

getData(42).then(
    (val) => console.log(val),
    (err) => console.log(err)
)

Promise.race([
    getData(42, "server1"),
    getData(42, "server2"),
    getData(42, "server3")
]).then((x) => {.x[0]..})

