/*************
 * looping over string
 * First, print each vowel in input on a new line.
 * The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
 * Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
 */

// function vowelsAndConsonants(s) {
//     let vowel = [];
//     let consonant = [];
//     for (let i = 0; i < s.length; i++){
//         if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
//             vowel.push(s[i])
//         } else {
//             consonant.push(s[i])
//         }
//     }
//     console.log(vowel.join("\n"))
//     console.log(consonant.join("\n")) ;

// }
// vowelsAndConsonants("javascript")

// function vowelsAndConsonants(s) {
//     let vowel = [];
//     let consonant = [];
//     let vowelChar = "aeiou".split("");
//     for (let i = 0; i < s.length; i++){
//         if (vowelChar.includes(s[i])){
//             vowel.push(s[i])
//         } else {
//             consonant.push(s[i])
//         }
//     }
//     console.log(vowel.join("\n"))
//     console.log(consonant.join("\n")) ;

// }
// vowelsAndConsonants("javascript")

/***********
 * score denoting the number of points Julia earned on an exam
 *  *  must return the letter 
 * A*  25 < score <= 30
 * B*  20 < score <= 25
 * c*  15 < score <= 20
 * D*  10 < score <= 15
 * E 5 < score <= 10 
*/

// function getGrade(score) {
//     let grade="";

//     switch (true) {
//         case score >= 30:
//             grade = "A";
//             break;
//         case score >= 25:
//             grade = "B";
//             break;
//         case score >= 20:
//             grade = "C";
//             break;
//         case score >= 15:
//             grade = "D";
//             break;
//         case score >= 10:
//             grade = "E";
//             break;
//         case score > 5:
//             grade = "F";
//             break;
//     }
    
//     return grade;
// }
// getGrade(20) 

// function getGrade(score) {
//     let grade = "";
    
//     if (score >= 30) {
//         grade = "A";
//     } else if (score >= 25) {
//         grade = "B"
//     } else if (score >= 20) {
//         grade = "c"
//     } else if (score >= 15) {
//         grade = "D"
//     }else if(score >=10){
//         grade = "E"
//     } else {
//         grade = "F"
//     }
//     return grade;
// }
// getGrade(20)
 
// function getGrade(score) {
//     return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
// }

/********
 * It has one parameter: a string, , consisting of lowercase English alphabetic letters (a through z)
 * If the first character in string  is in the set {a,e,i,o,u} then return A.
 * If the first character in string  is in the set {b,c,d,f,g} then return B.
 * If the first character in string  is in the set {h,j,k,l,m} then return C.
 * If the first character in string  is in the set {n,p,q,r,s,t,v,w,x,y,z} then return D
*/

// function getLetter(s) {
//     let letter;
//     switch (true) {
//         case ["a", "e", "i", "o", "u"].includes(s[0]):
//             letter = "A";
//             break;
//         case ["b", "c", "d", "f", "g"].includes(s[0]):
//             letter = "B";
//             break;
//         case ["h", "j", "k", "l", "m"].includes(s[0]):
//             letter = "C";
//             break;
//         case ["n", "p", "q", "r", "s" , "t" , "v" , "w" , "x" , "y" , "z"].includes(s[0]):
//             letter = "D";
//             break;
//     }
    
//     return letter;
// }
// getLetter("i")
