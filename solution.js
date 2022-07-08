// complete the given function

function palindrome(str){
    let newStr = str.toLowerCase();
    let reverse = newStr.split('').reverse().join('');

    return newStr === reverse;
}

palindrome(str);

module.exports = palindrome
