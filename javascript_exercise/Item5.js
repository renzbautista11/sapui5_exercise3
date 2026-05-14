//Exercise 3 - Item 5 - Arrays
//5.) We have the following arrays:
//color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"]
//Write a JavaScript program to display the colors in the following way (must display until the last color in
//the array accordingly):
//"1st choice is Blue."
//"2nd choice is Green."
//"3rd choice is Red."

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];
var text = "";

for (var i = 0; i < color.length; i++) {
    var ord;
    text = ""
    if (i + 1 == 1) {
        ord = o[1];
    } else if (i + 1 == 2) {
        ord = o[2];
    } else if (i + 1 == 3) {
        ord = o[3];
    } else {
        ord = o[0];
    }
text += (i + 1) + ord + " choice is " + color[i] + ".";
console.log(text);
}