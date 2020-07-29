function isprime(n)
{
var i;
for (i=2; i<n ; i++){

    if ( n%i==0 ){

        return "it's not a prime number"
    }

    else{

        return "it's a prime number"
    }

    
}

}

var result = isprime(127);
console.log(result);