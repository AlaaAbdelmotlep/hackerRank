/*
* Declare a RegExp object variable named 're'
* It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
*/
function regexVar(re) {
    let pattern = /^([aeiou]).*\1$/
    
    if(re.match(pattern)) {
        return re;
    }else{
        return false
    }
}
regexVar("abcdo") // false
regexVar("abcda") // true

//  ^ => first item matches: matches only at the start (0th index)
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match.
// \2 looks for matched item stored 2 instances ago
// \3 looks for matched item stored 3 ago, etc
//  $ ensures that matched item is at end of the sequence

// .*\1  --> The .* means that there may be characters after that first captured character

// \1$ checks that the last character matches the first captured charcter

/*
    * Declare a RegExp object variable named 're'
    * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
    * followed by one or more letters.
*/
function regexVar() {

    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/

    return re;
}

/*
* Declare a RegExp object variable named 're'
* It must match ALL occurrences of numbers in a string.
*/
    
function regexVar() {

    let re = /\d+/g

    return re;
}