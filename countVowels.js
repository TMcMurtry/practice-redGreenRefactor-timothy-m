const vowels = "aeiou";

function countVowels(word){
    let count = 0;
    for(let i=0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count ++
        }
    }
    return count;
}

module.exports = countVowels;