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
 * 
 */