console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function LongestWord(sen) {
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
LongestWord('lol time'); // => 'time'
LongestWord('I love cats'); // => 'love'
LongestWord('coding is awesome'); // => 'awesome'
LongestWord('hello world'); // => 'hello'
LongestWord_2('lol!- time.');
*/