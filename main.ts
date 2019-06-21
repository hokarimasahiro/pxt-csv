/**
 * makecode CSV(comma separated value) Package.
 */

/**
 * CSV block
 */
//% weight=100 color=#303030 icon="\u2712" block="CSV"
namespace CSV {

    //% shim=CSV::testI2c
    function testI2c(n: number): number {
        return 0;
    }
    export function testI2cRead(ad: number): number {
        return testI2c(ad)
    }
    /**
     * get string in a csv data
     * @param csv data, eg: "123,4,324"
     * @param n of , eg: 1
     */
    //% blockId="GetString" block="Get String in %csv at %n"
    //% weight=100 blockGap=8
    export function getString(csv: string, n: number): string {
        let i2 = -1
        let wcsv = csv
        for (let i = 0; i <= n; i++) {
            wcsv = wcsv.substr(i2 + 1, wcsv.length - i2)
            i2 = wcsv.indexOf(",")
            if ((i2 == -1) && i < n) return ""
        }
        if (i2 == -1) i2 = wcsv.length
        return wcsv.substr(0, i2)
    }
    /**
     * string to value
     * @param s data, eg: "123"
     */
    //% blockId="toNumber" block="string %s to value"
    //% weight=98 blockGap=8
    export function toNumber(s: string): number {
        let a = 0
        let minus = 1
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) == "-") minus = -1
            if ("0123456789".indexOf(s.charAt(i)) != -1) a = a * 10 + "0123456789".indexOf(s.charAt(i))
        }
        return a * minus
    }
    /**
     * get value in a csv data
     * @param csv data, eg: "123,4,324"
     * @param n of , eg: 1
     */
    //% blockId="GetValue" block="Get value in %csv at %n"
    //% weight=96 blockGap=8
    export function getValue(csv: string, n: number): number {
        return toNumber(getString(csv, n))
    }

}
