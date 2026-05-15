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

var line = height;

while (line > 0) {
    var asterisks = 0;
    var space = 0;
    var out = "";
    while (space < height - line) {
    	out += "  ";
        space++;
    }
    
    while (asterisks < line) {
        out += "* ";
        asterisks++;
    }

    line--;
    
    console.log(out);
}