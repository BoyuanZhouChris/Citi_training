var func = function name(params) {
    for (var i = 0; i < params; i++) {
        console.log(i)
    }
}

func(10)

var obj = {
    a: 1,
    b: 2,
    c: 3,
}

for (var prop in obj) {
    console.log('obj ' + prop + ' = ' + obj[prop])
}

const arr = ['a', 'b', 'c']

for (const element of arr) {
    console.log(element)
}
