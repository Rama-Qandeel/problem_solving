console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function remove(sen) {
    const result = sen.replace(punctuation, '');
return result

}



function LongestWord_2(sen) {
    // const result = sen.replace(punctuation, '');
   const result= remove(sen);
    if (sen.length===0){
       return "there is 0 words"
    }
    const words=result.split(" ");
    let output="";
for(i=0; i<words.length;i++){
    console.log(words[0])
    console.log(words[i])
if(words[i].length>output.length){
    output=words[i];

}

}
return output
}

/* 
Examples:
LongestWord_2('lol!- time.'); // => 'time'
LongestWord_2('I** love, cats'); // => 'love'
LongestWord_2('coding&& is awesome'); // => 'awesome'
LongestWord_2('hello|| world'); // => 'hello'
*/