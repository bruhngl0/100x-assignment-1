//anargam problem -easy
/*function anar(one, two, callback){
  let first = callback(one)
  let second = callback(two)

   first == second ? console.log("true") : console.log(false)
}

function logic(str){
  return str.toLowerCase().split("").sort().join("")
}

anar('openai!', 'open', logic) */





//find largest in an array

/*function largest(arr){
  arr.sort((a,b)=> a-b)
  console.log(arr[arr.length-1])
}

largest([-3.5, -7.2, -2.1, -9.8, -1.9, -5.1]) */

//transactions


/*
 count vowels 
*/


/*function phrase(str) {
 
  let newArr = str.toLowerCase().split("").filter((val)=> val == "a"||     val=="e"||val=="i"||val=="o"||val=="u").length

  console.log(newArr)
}

phrase("rythmaeaii"); */

//OR USE /[aeiou]/.test(str)

/*function phrase(str){
  let newArr = str.toLowerCase().split("").filter((val)=> /[aeiou]/.test(val)).length
  console.log(newArr)
}

phrase("adityasharma is") */

//pallendrome

/*function check(str, callback) {

  let modInputStr = callback(str)
  let revStr = modInputStr.split("").reverse().join("")
  modInputStr == revStr ? console.log(true) : console.log(false)
}


function modInp(str){
  let modInputStr = str.toLowerCase().split(" ").join("")
   return modInputStr.replace(/[^\w\s]/g, '')  
}

check("openai", modInp)*/

//calculate the time to compile the sum of 1 to n

/*function add(num) {
  let acc = 0;
  for (let i = 0;  i<=num; i++){
    acc = acc+i
  }
  console.log(acc)
}

add(10000000)
/* OUTPUT
PS D:\leon\codewars> node main.js
50000005000000
default: 17.134ms
PS D:\leon\codewars> node main.js
PS D:\leon\codewars> node main.js
500000000067109000
default: 1.000s
PS D:\leon\codewars> node main.js
50000000000067860000
default: 10.406s
PS D:\leon\codewars> */

