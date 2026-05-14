//Exercise 3 - Item 1 -IF CONDITIONS
//1.) Given a number ‘number’, assuming it’s ranging from 1 – 999, convert it into
//words using If.. else condition or simply if conditions or switch statement.
//A dynamic code is to be generated, and a validation can be implemented to ensure that it would only
//cater the number range above.
//Sample input: var number = 789;
//Sample output: Seven Hundred Eighty Nine

var number = 9999;

// Validation
if (number < 1 || number > 999 || isNaN(number)) {
    console.log("Please enter a number between 1 and 999.");
} else {
       
    var converted = "";
    var arrOnes = ["", "One", "Two", "Three", "Four","Five", "Six", "Seven", "Eight", "Nine"];
    var arrTeens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen","Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var arrTens = ["", "", "Twenty", "Thirty", "Forty","Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    // Hundreds place
    if (number >= 100) {
        converted += arrOnes[Math.floor(number / 100)] + " Hundred ";
        number = number % 100;
    }

    // Tens and Ones place
    if (number >= 10 && number <= 19) {
        converted += arrTeens[number - 10];
    } else {
        if (number >= 20) {
            converted += arrTens[Math.floor(number / 10)] + " ";
            number = number % 10;
        }

        if (number > 0) {
            converted += arrOnes[number];
        }
    }

    console.log(converted.trim());
}