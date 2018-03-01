module.exports = function getZerosCount(number, base) {
    var baseNum = 0;
    var res = 0;
    if(base % 2 != 0){
      baseNum = base;
    }else{
        while(base % 2 == 0 ){
            base = base/2;
            baseNum = base;
        }
    }
    if (baseNum==1){
        res=Math.floor(number/5);
    }else{
    while(number){
        number = (Math.floor(number/baseNum));
        res+=number;
    }}
    return res;
} 