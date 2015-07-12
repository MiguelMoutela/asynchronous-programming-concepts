
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

getData(42)
    .then((val)  => console.log(val))
    .catch((err) => console.log(err))

