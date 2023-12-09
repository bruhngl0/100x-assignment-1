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


//counter function

//transactions question

/*const data = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];



function easy(tranactions) {

  let total = {}

  tranactions.forEach((block)=>{
   const {category, price} = block
    

    if (!total[category]) {
      total[category] = price
    
    } else {
      total[category] += price;
    }
  
  });

  const result = Object.keys(total).map(category => ({
    category,
    totalSpent: total[category],
  }));

  console.log(result);
  }




easy(data) */

/*class CreateObj {
  constructor(name,age,designation){
    this.name = name;
    this.age = age;
    this.designation = "developer"
  }
}


const dataOne = new CreateObj("aditya", 34, "developer")
console.log(dataOne) */
/*
class Entries{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  play() {
    this.age > 18 ? console.log("eligible to play") : console.log("not eligible")
  }
}


const dataOne = new Entries("aditya", 28)
const dataTwo = new Entries("piyush", "16")




class Coach {
  constructor(name){
    this.name = name;
  }
}

const mike = new Coach("mike")
mike.play = dataOne.play
console.log(mike)

mike.play.call(dataOne)
mike.play.call(dataTwo) */

//addTodo ---working
//update task ---working
//clearAll --working
//getAll --working
//get task by index ---- working
//remove task by index ---working

/*class Todo {
  constructor(){
    this.arr = []
  }

  addTodo(task){
    this.arr.push(task)   //working
  }

  updataTodo(index, updateTask){
    if(index >=0 && index < this.arr.length){
      this.arr[index] = updateTask
    }
   
  }

  getAll(){
    return this.arr.slice()
  }

  clearAll(){
    this.arr = []
  }
  
  taskInd(index){
    if(index>=0 && index < this.arr.length){
     return this.arr[index]
    }
  }

  removeTask(index){
    if(index>=0 && index < this.arr.length){
      this.arr.splice(index,1)
    }
  }
}


const data = new Todo 







data.addTodo("buy groceries")
data.addTodo("complete homework")
data.addTodo("go for a run")

console.log(data.getAll())

data.updataTodo(1, "finish")
console.log(data.getAll())

data.removeTask(0)
console.log(data.getAll())

console.log(data.taskInd(1))

data.clearAll()
console.log(data.getAll()) */



/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.ans = 0;
  }

  add(num){
    this.ans += num
  }

  subtract(num){
    this.ans -= num
  }

  multiply(num){
    this.ans *= num
  }

  divide(num){
    this.ans /= num
  }

  clear(){
    this.ans = 0 
  }

  getResult(){
    return this.ans
  }


  calc(str){
    let cal = eval(str)
    this.ans = cal
  }

}


const math = new Calculator
console.log(math.getResult())