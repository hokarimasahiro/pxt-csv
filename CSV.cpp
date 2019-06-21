#include "pxt.h"

namespace CSV{
    uint32_t testI2c(int32_t ad){
        Buffer buf = createBuffer(2);
        return uBit.i2c.read(ad << 1 | 1,buf,2)
        return 2
    } 
}
