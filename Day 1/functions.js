/*
 * Create the function factorial here
 */
function factorial(n){
    let result;
    if(n < 2){
         result = 1;
    } else {
         result = n * factorial(n-1);
    }
    
    return result;
}


/*
Another way to solve the problem. Comment out to run the code.

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
    result *= i;
    }
    return result;
}

*/