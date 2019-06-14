// tests go here; this will not be compiled when this package is used as a library
let testStr = "M,123,4325,11,5"
let testCount = 6
basic.forever(function () {
    for (let i = 0; i < testCount; i++) {
        basic.clearScreen()
        basic.showString(CSV.getString(testStr, i))
        basic.pause(500)
    }
    basic.pause(500)
    for (let i = 0; i < testCount; i++) {
        basic.clearScreen()
        basic.showNumber(CSV.getValue(testStr, i))
        basic.pause(500)
    }
    basic.pause(500)
})
