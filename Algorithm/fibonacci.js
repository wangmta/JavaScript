/**
 * Created by admin on 5/20/2017.
 */
// function fibonacci(n) {
//     var fibo = [0,1];
//     if(n <= 2){
//         return 1;
//     }
//     for(var i=2; i<=n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo[n];
// }

function fibonacci(n) {
    if(n < 0){
        return;
    }
    if(n<=1){
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(12));

