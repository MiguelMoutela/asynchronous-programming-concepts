
const getData = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (id === 0)
                reject(new Error("invalid id"))
            else
                resolve(`Data<${id}>`)
        })
    })
}

getData(0) .then((x) => console.log(x), (err) => console.log(err))
getData(42).then((x) => console.log(x), (err) => console.log(err))

