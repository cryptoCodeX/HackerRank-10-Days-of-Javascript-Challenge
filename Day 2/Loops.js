/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = ['a','e','i','o','u'];
    for(let i = 0; i < s.length; i++){
        if(vowel.indexOf(s[i]) != -1){
            console.log(s[i]);
        }
    }
    
    for(let j = 0; j < s.length; j++){
        if(vowel.indexOf(s[j]) < 0){
            console.log(s[j]);
        }
    }
}