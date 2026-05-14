//Exercise 3 - Item 3 -FOR LOOP
//3.) Using For Loop, print the pattern below. Given ‘height’ as height of the ‘X’ sign and
//assuming it is not a negative number and ‘height’ is an odd number.
//Sample input: var height = 5;
//Sample output:
//*     *
// *   *
//   * 
// *   *
//*     *

var height = 8;

if (height % 2 !== 0) {

for (var i = 0; i < height; i++) {

    var text = "";
    for (var j = 0; j < height; j++) {
        // Print * on both diagonals
        if (j == i || j == height - i - 1) {
            text += "*";
        } else {
            text += " ";
        }
    }
        //row += "<br>";

console.log(text);
}
} else {
    console.log("Please enter an odd number for height.");
}
