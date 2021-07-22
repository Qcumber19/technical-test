function reverseWord(string){
    var word = [];
    word = string.match(/\S+/g);
    var result = "";
    for (var i = 0; i < word.length; i++){
        result += word[i].split('').reverse('').join('');
    }
    return result;
}

console.log(reverseWord("Aplikasi"))