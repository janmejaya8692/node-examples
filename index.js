// var rect = {
//     perimeter: function(x,y){
//         return 2*(x+y);
//     },
//     area: function(x,y){
//         return x*y;
//     }
// };

var rect = require('./rectangle');

function solveRectangles(l, b){
    console.log("solving for rectangle with l = " + l + " and b = "+b );
    if(l <= 0 || b <= 0){
        console.log("rectangle dimensions should be greater than zero");
    }
    else{
        console.log("The area of the rectangle is: " + rect.area(l, b));
        console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
    }
}

solveRectangles(2, 4);
solveRectangles(3, 5);
solveRectangles(0, 5);
solveRectangles(-3, 5);
solveRectangles(4, 5);