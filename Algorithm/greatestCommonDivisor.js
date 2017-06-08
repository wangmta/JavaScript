function greatestCommonDivisor(a, b) {
    var divisor = 2, greatestDivisor = 1;

    if(a<2 || b<2) return 1;

    while (a>=divisor && b>= divisor){
        if(a%divisor == 0 && b%divisor == 0){
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

// better solution
function gCommonDivisor(a, b) {
    if(b == 0) return a;
    else return gCommonDivisor(b, a%b);
}