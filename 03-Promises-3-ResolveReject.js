
/*

Interesting Aspects
===================

1. ".then" method returns a new(!) Promise.
2. This promise in onSuccess and(!) onError can be resolved by any "return value".
3. This promise in onSuccess and(!) onError can be rejected by any "throw value".

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
    }).catch((err) => {
        console.log(action1, action2, "ERR", err)
    })
}

testdrive("foo", "resolve", "return")
testdrive("foo", "resolve", "throw")
testdrive("foo", "reject",  "return")
testdrive("foo", "reject",  "throw")

