function change_number(number) {
    var number = number + "";
    return number.split("").reverse("").join("")

}

console.log(change_number(345672))

function reversed_nums(x) {
    var x = x + "";
    return x.split("").reverse("").join("");
}
console.log(reversed_nums(67980976))

function check_string_odd_even() {
    var name = ""
    var count = 0
    if (name === "") {
        console.log("It's empty ")
        return false
    }
    if ((name.length) % 2 === 0) {
        count = (name.length) / 2
    } else {
        if (name.length === 1) {
            console.log("It's a string")
            return true
        } else {
            //if the length of a string is odd ignore the middle character 
            count = (name.length) / 2;
        }
    }
    for (var x = 1; x <= count; x++) {
        if (name[x] != name.spice(-1 - x)) {
            console.log("Is not a a string")

        }
    }
    console.log("Is a string")
}
check_string_odd_even("google");
check_string_odd_even("Marathon")

function check_palindrome(str) {
    var word = str.toLowerCase("").replace(/[^A-Za-z0-9]/g, '')
    var count = 0;
    if (word === "") {
        console.log("not found")
        return false
    }
    if ((word.length) % 2 == 0) {
        count = (word.length) / 2;
    } else {
        if ((word.length) === 1) {
            console.log("str is a palindrome")
            return true
        } else {
            count = word.length - 1 / 2;
        }
    }
    for (var x = 1; x <= count; x++) {
        if (word[x] != word.slice(-1 - x)) {
            console.log("Is not a palindrome")
        }
    }
    console.log('palindrome found')
}
check_palindrome("wow");
check_palindrome('madam');

(function getResponse() {
    var response = new Promise((resolve, rejected) => {
        setTimeout(() => resolve("great"), 3000)
    })
    response.then((msg) => {
        console.log(`Hello your massage was ${msg}`)
    }, () => console.log("Oops! the massage wasn't successful "))
}());
(function packages() {
    var packages = new Promise((resolve, reject) => {
        setTimeout(() => resolve(56), 1000)
    })
    packages.then((numbers) => {
        console.log(`Here is your selected ${numbers}`)
    }, () => { console.log("You your chosen numbers failed") })
}());

(function verify() {
    var students = new Promise((resolve, reject) => {
        setTimeout(() => resolve("AkiraChix"), 100);
    })
    students.then((std) => {
        console.log(`You a student at ${std}`)
    }, () => console.log("Your details are rejected!"))
}()); // function check_palindrome(str) {
// var word = str.toLowerCase().replace(/[^A-Za-z0-9]/g
// var count = 0;
// if (word === '') {
// console.log('not found')
// return false
// }
// if ((word.length) % 2 === 0) {
// count = (word.length) / 2;
// } else {
// if (word.length === 1) {
// console.log("str is a palindrome ")
// return true
// } else {
// count = (word.length - 1) / 2;
// }
// }
// for (var x = 1; x <= count; x++) {
// if (word[x] != word.slice(-1 - x)) {
// console.log("Is not a a palindrome")
// }
// }
// console.log("Is a palindrome")
// }
// check_palindrome("wow");
// check_palindrome("Madam");
// check_palindrome("sasa")