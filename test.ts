// tests go here; this will not be compiled when this package is used as a library

basic.forever(function () {
    basic.clearScreen()
    basic.pause(100)
    basic.showString(CSV.getString("ABC,DEF,123",2))
    basic.pause(300)
})
