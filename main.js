/*function target(arr) {
  let arrnew = arr.reduce((acc,val)=>{
    if(val > 0 ){
      return (acc+val)
    }
    else{
      return acc
    }
  }, 0)

  console.log(arrnew)


  let arrnewone = arr.reduce((acc, val)=> {
    if (val < 0){
      return (acc+val)
    }
    else{
      return acc
    }
  },0)
  console.log(arrnewone)

  let res = [arrnew, arrnewone]
  console.log(res)
} */



//using filter and reduce

/*function tryone(arr){
 let arrnew = arr.filter((val)=> val>0).reduce((acc,vals)=> acc + vals)
 let arrnewone = arr.filter((val)=> val<0).reduce((acc,vals)=> acc+vals)
 console.log([arrnew, arrnewone])
}



tryone([1,2,3,4,5,6, -8, -9]) */


//using foreach

/*function mauj(arr){

  let one = 0;
  let two = 0;

  arr.forEach(element => {
    if(element > 0){
      one = one+element
    }
    else{
      two = two+ element
    }
  }
  
  );

  console.log([one, two])

} */


/*function mauj(arr) {
  const resu = arr.reduce((acc,val)=> {
     if(val > 0){
      acc[0] = acc[0]+val
     }

     else{
      acc[1]= acc[1]+val
     }

     return acc
  }, [0,0])

  console.log(resu)
}

mauj([1,2,3,4,5,6, -8, -9])

 */
/*wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
   
  for(let i =0  ; i <= str.length ; i++)
} */

function add(num) {
 console.time()
  let acc = 0;
  for (let i = 0;  i<=num; i++){
    acc = acc+i
  }
  console.log(acc)
 console.timeEnd()
}

add(10000000000)