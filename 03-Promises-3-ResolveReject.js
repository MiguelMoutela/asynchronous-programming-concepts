
/*

Interesting Aspects
===================

1. ".then" Methode liefert neuen Promise!
2. Dieser wird in onSuccess und(!) onError durch "return value" mit "value" resolved.
3. Dieser wird in onSuccess und(!) onError durch "throw value"  mit "value" rejected.

*/

var testdrive = (id, action1, action2) => {
    Promise[action1](id).then((val) => {
        if (action2 === "return")
            return `${val}:OK`
        else
            throw `${val}:EX`
    }, (err) => {
        if (action2 === "return")
            return `${err}:OK`
        else
            throw `${err}:EX`
    }).then((val) => {
        console.log(action1, action2, "VAL", val)
    }, (err) => {
        console.log(action1, action2, "ERR", err)
    })
}

testdrive("foo", "resolve", "return")
testdrive("foo", "resolve", "throw")
testdrive("foo", "reject",  "return")
testdrive("foo", "reject",  "throw")

