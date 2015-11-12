//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?


function primeFactor(inputnumber) {
    //if i is a factor of inputnumber, check if it is prime
    var factors = [];
    for (var i = 10000; i>1; i--){
        if (inputnumber%i===0){
            factors.push(i);
        }
    }

    for (var f in factors) {
        if (isPrime(factors[f])===true){
            return factors[f];
        }
    }
}

function isPrime(factor) {
    if (factor === 2){
        return true;
    } else if (factor%2 === 0 || factor <= 1){
        return false;
    };
    for (var i = 3; i < Math.sqrt(factor); i += 2){
        if (factor%i === 0){
            return false;
        }
    };
    return true;
}

console.log(primeFactor(13195));
console.log(primeFactor(600851475143));
