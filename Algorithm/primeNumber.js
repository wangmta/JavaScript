/**
 * Created by admin on 5/19/2017.
 */
function isPrime(n) {
    var divisor = 2;
    while(n > divisor){
        if(n % divisor == 0){
            return false;
        }
        else
            divisor++;
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(2));

