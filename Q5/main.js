console.log('Problem Solving Q: 5 ');

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of 
strings stored in strArr which will contain 2 elements:
 the first element will represent a list of comma-separated numbers 
 sorted in ascending order, the second element will represent a 
 second list of comma-separated numbers (also sorted). 
 Your goal is to return a comma-separated string containing the
  numbers that occur in elements of strArr in sorted order. 
  If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  let result=''
let firstEle=strArr[0].split(',')
let secondEle=strArr[1].split(',')
firstEle.forEach(element1 => {
  secondEle.forEach(element2 => {
if (element1===element2){
  result+=element1+','
}
if (result===''){
  result=false
}
  })
});
  
  return result
}

/* 
Examples:
FindIntersection(['1, 3, 4, 7, 13','1, 2, 4, 13, 15']); // => '1,4,13'
FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

