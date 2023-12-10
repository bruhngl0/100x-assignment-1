//callback functions main purpose is to be used in asnchronous functions.
// if we want any function to be runned asynchronously, we use the APIs provided by the browser to delegate the task.(runs on a separate thread that doesnt block the main thread.)

// eg --  i want an add function to be run asynchronously, i will put that function as an argument to the asynchronous functions that browser/javascript provides us//

//callback function
/*function add(a, b) {
  console.log(a + b);
}

setTimeout(() => {
  add(2, 3);
}, 1000);

//now add is an asynchronous function.

//how can we create our asynchronous function--
// to make a function asynchronous on our own, we have to wrap around a function along with the global broweser api like settimeout etc. */

// to make an asynchronous function, it should have an argument as a callback function, that it calls after the asynchronous task is done,

// to simualte the asynchronous task, we have to use inbuilt js APIs like settimeout etc.

/*function lol(callback, a,b){
  setTimeout(()=>{
    callback(a,b)
  },1000)
}

//callback fn
function sub(a,b){
  console.log(a-b)
}

lol(sub, 5,3)


// give a real use example of callbacks for asynchronous functions--

function mauj(callback, a, b){

  setTimeout(()=>{
    const data = a+b;
    callback(null, data)
  }, 3000)
}


function cb(err,success){
  if(err){
    console.error("error")
  }
  else{
    console.log(success)
  }
}

mauj(cb, 3,4)

//one more real world example--


function fetchdata(callback){
  setTimeout(()=>{
    const data = "data has been fetched";
    if(data){
      callback(null, data)
    }else{
      callback(err, null)
    }
  }, 2000)
}

function cb(err, success){
  if(err){
    console.error("error")
    
  }else{
    console.log(success)
  }
}


fetchdata(cb) */

//write one more custom-made asynchronos function

/*function quiz(cb) {
  setTimeout(() => {
    cb()
  }, 2000);
}

function cb() {
  const rest = Math.random();
  console.log(rest);
  rest > 0.5 ? console.log("win") : console.log("lose");
}

quiz(cb) */


//since all these are callbacks, and we know that dealing with callbacks become nasty when the result of the callback of one function, is required as an argument of the next asynchronous task, we face a big problem knows as callback hell--- 

/*readFile('example.txt', (err, data1) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    makeHttpRequest(data1, (err, data2) => {
      if (err) {
        console.error('Error making HTTP request:', err);
      } else {
        processResult(data2, (err, finalResult) => {
          if (err) {
            console.error('Error processing result:', err);
          } else {
            console.log('Final Result:', finalResult);
          }
        });
      }
    });
  }
});
 */


//so to eliminate this problems of callbacks, we will use promises, that sends back the state of the promise. under the hood it works same its just a syntactical sugar--



/*function lol(){
    return new Promise((resolve, reject)=> {
  
      setTimeout(()=>{
        let data = 5
        resolve(data)
      },3000)
    })
  }
  
  
  function cb(a,b) {
    console.log(a+b)  
    }
  
  const a = lol()
  console.log(a)
  
  lol().then((data)=>{
    cb(data, 5)
  }) */




 /* function cookMaggie(){
 return new Promise((resolve)=>{
    setTimeout(()=>{
        const message = " i have bought the maggie"
        resolve(message)
   },3000)
 })
  
  }



  function subtract(a,b){
    return(a-b)
  }


  cookMaggie().then((message)=>{
    let res  = subtract(5,3)
    console.log(res,message)
  }) */


// same function with callbacks---

/*
  function cookMaggie(cb, a,b){
    setTimeout(()=>{
        const message = "i have bought the maggie"
        console.log(cb(a,b), message)
    }, 1000)
  }


  function bc(a,b){
    return a+b
  }


  cookMaggie(bc, 4,4) */