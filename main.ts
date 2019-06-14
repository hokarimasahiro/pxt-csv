/**
 * makecode CSV(comma separated value) Package.
 */

/**
 * CSV block
 */
//% weight=100 color=#303030 icon="\u2712" block="CSV"
namespace CSV {

    /**
     * get string in a csv data
     * @param csv data, eg: "123,4,324"
     * @param n of , eg: 1
     */
    //% blockId="GetString" block="Get String in %csv at %n"
    //% weight=100 blockGap=8
    export function getString(csv: string, n: number): string {
        let i1=0
        let i2=-1
        for(let i=0;i<=n;i++){
            i1=i2+1
            i2=csv.indexOf(",",i1)
            if ((i2==-1) && i <n) return ""
        }
        if(i2==-1) i2=csv.length
        return csv.substr(i1,i2-i1)
    }
    /**
     * string to value
     * @param s data, eg: "123"
     */
    //% blockId="toNumber" block="string %s to value"
    //% weight=98 blockGap=8
    export function toNumber(s: string): number {
        let a = 0
        for(let i=0;i<s.length;i++)
        a=a*10 + s.charCodeAt(i)-0x30
        return a
    }
    /**
     * get value in a csv data
     * @param csv data, eg: "123,4,324"
     * @param n of , eg: 1
     */
    //% blockId="GetValue" block="Get value in %csv at %n"
    //% weight=96 blockGap=8
    export function getValue(csv: string, n: number): number {
        return n//toNumber(getString(csv,n))
    }

}
