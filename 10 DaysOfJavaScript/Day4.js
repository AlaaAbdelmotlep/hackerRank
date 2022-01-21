/*********************
 * Complete the function in the editor. It has two parameters:  a and b It must return an object modeling a rectangle that has :
 * a This value is equal to length
 * b This value is equal to width
 * perimeter This value is equal to 2*(a+b)
 * area This value is equal to a*b
 */

function Rectangle(a, b) {
    // return object
    let obj = {}
    let perimeter = 2*(a+b);
    let area = a*b;
    obj.length = a
    obj.width = b
    obj.perimeter = perimeter
    obj.area =area
    
    return obj;
}



/*****************
 * array of objects
 * 
 */

function getCount(objects) {
    let conuter=0;
    for (let obj of objects) {
        if (obj.x === obj.y) {
            conuter++
        }
    }
    return conuter
}
getCount([{ x: 1, y: 1 }, { x: 2, y: 5 }, { x: 7, y: 7 }]) //2

/*************
 * Create a Polygon class that has the following properties:
 * A constructor that takes an array of integer values describing the lengths of the polygon's sides
 * A perimeter() method that returns the polygon's perimeter.
 * Locked code in the editor tests the Polygon constructor and the perimeter method.
 * // Create a polygon with side lengths 3, 4, and 5
 * let triangle = new Polygon([3, 4, 5]);
 * // Print the perimeter
 * console.log(triangle.perimeter());
 */

class Polygon{
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        let sum = 0;
        this.sides.map((a) => sum += a)
        return sum;
    }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());