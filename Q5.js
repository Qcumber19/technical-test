function check_palindrome(word){
    var regex = /[^A-Za-z0-9]/g;
    var lowWord = word.toLowerCase().replace(regex, '');
    var reverseword = lowWord.split('').reverse('').join('');
    return reverseword === lowWord;
}

console.log(check_palindrome("kataK"))
console.log(check_palindrome("iBu"))