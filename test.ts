// tests go here; this will not be compiled when this package is used as a library
basic.forever(function () {
    for (let i = 0; i < 5; i++) {
        basic.clearScreen()
        basic.showString(CSV.getString("M,123,4,324", i))
        basic.pause(500)
    }
    basic.pause(500)
})
