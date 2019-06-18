// tests go here; this will not be compiled when this package is used as a library

basic.forever(function () {
    basic.showNumber(CSV.testI2cRead(0x32))
    basic.pause(500)
})
