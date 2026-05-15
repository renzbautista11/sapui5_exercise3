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

var height = 5;

if (height % 2 !== 0) {

for (var row = 0; row < height; row++) {

    var out = "";
    for (var col = 0; col < height; col++) {
        if (col == row || col == height - row - 1) {
            out += "*";
        } else {
            out += " ";
        }
    }

console.log(out);
}
} else {
    console.log("Please enter an odd number for height.");
}
