
const getData = (id, cb) => {
	setTimeout(() => {
	    if (id === 0)
	        cb(new Error("invalid id"))
	    else
	        cb(null, `Data<${id}>`)
	}, 100)
}

getData(0,  (err, x) => console.log(err !== null ? err : x))
getData(42, (err, x) => console.log(err !== null ? err : x))

