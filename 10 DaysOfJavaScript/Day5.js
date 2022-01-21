class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.h * this.w;
}

class Square extends Rectangle  {

    constructor(height) {
        super(height, height)
    }
    
}

/* 
Complete the function in the editor. It has one parameter: an array nums.
It must iterate through the array performing one of the following actions on each element:
If the element is even, multiply the element by 2
If the element is odd, multiply the element by 3
The function must then return the modified array.
*/

let odd = (n) => n*3
let even = (n) => n*2
function modifyArray(nums) {
    let result =[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 === 0){
           result[i] = even(nums[i])
        }else{
            result[i] = odd(nums[i])
        }
    }
    return result;
}
modifyArray([1, 2, 8, 9])



 




