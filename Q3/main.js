
console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse(str) {
  if (str.length===0){
    return "Invalid string"
  }
let reverseStr="";
console.log(str.length)
for(i=str.length-1;i>=0;i--)
{
  reverseStr+=str[i]
}
  return reverseStr;
}

/* 
Examples:
FirstReverse('I Love Code'); // => 'edoC evoL I'
FirstReverse('Hello World'); // => 'dlroW olleH'
FirstReverse('How are you?'); // => '?uoy era woH'
*/