// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Replace The string multiple times for each character.
function coded(str){
    return str.replace(/[a]/gi, "4").replace(/[e]/gi, "3").replace(/[i]/gi,"1").replace(/[o]/gi,"0")
}

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

console.log(coded(secretCodeWord1));
console.log(coded(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// Preform a filter on the array that checks each word for a match with the character a, and if it is true, adds the word to the return
function aWords(arr){
    return arr.filter(word => word.match(/[a]/gi))
}

console.log(aWords(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

//Convert the array into a set, then check the length. If the length is greater than 2 numbers, I know I didnt have a full hosue, so return false, otherwise I return true.
function fullHouse(arr){
    return ([...new Set(arr)].length > 2)?false:true
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));