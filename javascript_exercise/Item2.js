//Exercise 3 - Item 2 -WHILE LOOP
//2.) Using While Loop, print the pattern below. Given ‘height’ as height of the triangle and
//assuming it is not a negative number.
//Sample input: var height = 5;
//Sample output:
//* * * * *
//  * * * *
//    * * *
//      * *
//        *

var height = 5;

var i = height;

while (i > 0) {
    var j = 0;
    var h = 0;
    var row = "";
    while (h < height - i) {
    	row += "  ";
        h++;
    }
    
    while (j < i) {
        row += "* ";
        j++;
    }
        //row += "<br>";

    i--;
    
    console.log(row);
}