/************
 * int nums[n]: an array of integer
 * Returns int: the second largest number in 
 */
function getSecondLargest(nums) {
    nums.sort((a, b) => b - a)
    let firstLargestNum = nums.lastIndexOf(nums[0])
    return nums[firstLargestNum+1]
}
getSecondLargest([2, 3, 6, 6, 5])

/************
 * Try to reverse string  using the split, reverse str and join methods.
 * If an exception is thrown massage catch it and print the contents of the exception's  on a new line ,Print  on a new line.
 * If no exception was thrown str then this should be the reversed string; if an exception was thrown, this should be the original string.
 */

function reverseString(s) {
    try {
        let newStr = s.split("").reverse().join("")
        console.log(newStr)
    } catch(e) {
        console.log(e.message)
        console.log(s)
    }
}
reverseString(Number(1234))


/**************
 * If the value of  is positive a the function must return the string YES. Otherwise,
 * it must throw an Error according to the following rules:
 * If  is a throw an Error with massage Zero Error.
 * If  is negative a throw an Error with massage Negative Error.
 */

function isPositive(a) {
    if(a > 0){
        return "YES"
    }else {
        throw(a===0?  new Error ("Zero Error"): new Error ("Negative Error"))
    }       
}
