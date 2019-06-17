#include "pxt.h"

namespace CSV{
    uint32_t testI2cRead(int32_t ad){
        Buffer buf = createBuffer(2);
        return uBit.i2c.read(ad << 1 | 1,buf,2)
    } 
}