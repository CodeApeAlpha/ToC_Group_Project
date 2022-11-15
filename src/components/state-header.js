
//  import { Observable } from 'rxjs';
 


//  import { Observable } from 'rxjs';
 
const regex = new RegExp("^([a-j])+");

let testCase = null ;
let position = null;
let speed = null;
let found = null;
let queue = null


function dfaFunction(input,inputPostion,inputSpeed){
   position = inputPostion
   speed = inputSpeed
   testCase = regex.test(input);
   found = input.match(/^([a-j])+/g);
   queue = found
   if(testCase && position == "Q0" ){
       return {position:q0Function(input),speed:speed}
   }else if(testCase && position == "Q1"){
       return {position:q1Function(input),speed:speed}
   }else if(testCase && position == "Q2"){
       return {position:q2Function(input),speed:speed}
   }else if(testCase && position == "Q3"){
       return {position:q3Function(input),speed:speed}
   }else if(testCase && position == "Q4"){
       return {position:q4Function(input),speed:speed}
   }else if(testCase && position == "Q5"){
       return {position:q5Function(input),speed:speed}
   }else if(testCase && position == "Q6"){
       return {position:q6Function(input),speed:speed}
   }else if(testCase && position == "Q7"){
       return {position:q7Function(input),speed:speed}
   }
   else{
      return false;
   }
}
function q0Function(input){
   
   if(input == "a"){
       // q2Function(input)
       return "Q2"
   }
   else if(input == "b"){
       // q1Function(input)
       return "Q1"
   }
   // q0Function(input)
   return "Q0"
}
function q1Function(input){
   if(input == "a"){
       // q3Function(input)
       return "Q3"
   }
   return "Q1"
}
function q2Function(input){
   if(input == "a"){
       // q0Function(input)
       return "Q0"
   }else if(input == "b"){
       // q1Function(input)
       return "Q1"
   }
   // q2Function(input)
   return "Q2"
}
function q3Function(input){
   if(input == "a"){
       // q0Function(input)
       return "Q0"
   }else if(input == "c"){
       // q4Function(input)
       return "Q4"
   }
   // q3Function(input)
   return "Q3"

}
function q4Function(input){
   if(input == "i"){
       return "Q3"
   }else if(input == "e"){
       increaseSpeed()
       // q6Function(input)
       return "Q6"
   }else if(input == "d"){
       increaseSpeed()
       // q5Function(input)
       return "Q5"
   }
   // q4Function(input)
   return "Q4"
}
function q5Function(input){

   if(input == "b"){
       speed = 0
       return "Q4"
   }else if(input == "h"){
       // q7Function(input)
       return "Q7"
   }else if(input == "f"){
           increaseSpeed()
   }else if(input == "g"){
       if((speed-10)!=0){
           decreaseSpeed()
       }else{
           decreaseSpeed()
           // q4Function(input)
           return "Q4"
       }
   }
   if(speed!=0){        
       // q5Function(input)
       return "Q5"
   }
}
function q6Function(input){

   if(input == "b"){
       speed= 0
       // q4Function(input)
       return "Q4"
   }else if(input == "f"){
       // increase speed
       increaseSpeed()
   }else if(input == "g"){
       // decrease speed
       if((speed-1)!=0){
           decreaseSpeed()
       }else{
           decreaseSpeed()
           // q4Function(input)
           return "Q4"
       }
   }
   if(speed != 0){
       // q6Function(input)
        return "Q6"
   }
}    
function q7Function(input){
 
   if(input == "g"){
       // q5Function(input)
        return "Q5"
   }
   // q7Function(input)
   return "Q5"
}
function next(queue){
   if(queue.length != 0){
       return queue.shift();
   }
}
function increaseSpeed (){
  return speed+=10;
}
function decreaseSpeed(){
   return speed-=10;
}
function test(input ,queue){
   if(queue.length == 0 && input == undefined){
       return false;
   }else{
       return true;
   }
}



module.exports ={
   dfaFunction
}




// //  import { Observable } from 'rxjs';
 
//  const regex = new RegExp("^([a-j])+");

//  let positionQueue = []
//  let testCase ;
//  let position = "Q0";
//  let speed = 0;
//  let found 
//  let queue

// dfaFunction("b")

// function dfaFunction(input){
//     testCase = regex.test(input);
//     found = input.match(/^([a-j])+/g);
//     queue = found[0].split("");
//     if(testCase && position == "Q0" ){
//         q0Function(input)
//         return positionQueue
//     }else if(testCase && position == "Q1"){
//         q1Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q2"){
//         q2Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q2"){
//         q3Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q3"){
//         q3Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q4"){
//         q4Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q5"){
//         q5Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q6"){
//         q6Function(next(queue),queue)
//         return positionQueue
//     }else if(testCase && position == "Q7"){
//         q7Function(next(queue),queue)
//         return positionQueue
//     }else{
//        return false;
//     }
// }
// function q0Function(input){
    
//     if(input == "a"){
//         // q2Function(input)
//         return "Q2"
//     }
//     else if(input == "b"){
//         // q1Function(input)
//         return "Q1"
//     }
//     // q0Function(input)
//     return "Q0"
// }
// function q1Function(input){
//     if(input == "a"){
//         // q3Function(input)
//         return "Q3"
//     }
//     return "Q1"
// }
// function q2Function(input){
//     if(input == "a"){
//         // q0Function(input)
//         return "Q0"
//     }else if(input == "b"){
//         // q1Function(input)
//         return "Q1"
//     }
//     // q2Function(input)
//     return "Q2"
// }
// function q3Function(input){
//     if(input == "a"){
//         // q0Function(input)
//         return "Q0"
//     }else if(input == "c"){
//         // q4Function(input)
//         return "Q4"
//     }
//     // q3Function(input)
//     return "Q3"

// }
// function q4Function(input){
//     if(input == "i"){
//         increaseSpeed()
//         // q3Function(input)
//         return "Q3"
//     }else if(input == "e"){
//         increaseSpeed()
//         // q6Function(input)
//         return "Q6"
//     }else if(input == "d"){
//         increaseSpeed()
//         // q5Function(input)
//         return "Q5"
//     }
//     // q4Function(input)
//     return "Q4"
// }
// function q5Function(input){
 
//     if(input == "b"){
//         speed = 0
//         // q4Function(input)
//         return "Q4"
//     }else if(input == "h"){
//         // q7Function(input)
//         return "Q7"
//     }else if(input == "f"){
//             increaseSpeed()
//     }else if(input == "g"){
//         if((speed-1)!=0){
//             decreaseSpeed()
//         }else{
//             decreaseSpeed()
//             // q4Function(input)
//             return "Q4"
//         }
//     }
//     if(speed!=0){        
//         // q5Function(input)
//         return "Q5"
//     }
// }
// function q6Function(input){

//     if(input == "b"){
//         speed= 0
//         // q4Function(input)
//         return "Q4"
//     }else if(input == "f"){
//         // increase speed
//         increaseSpeed()
//     }else if(input == "g"){
//         // decrease speed
//         if((speed-1)!=0){
//             decreaseSpeed()
//         }else{
//             decreaseSpeed()
//             q4Function(input)
//         }
//     }
//     if(speed != 0){
//         q6Function(input)
//     }
// }    
// function q7Function(input){
  
//     if(input == "g"){
//         q5Function(input)
//     }else{
//         q7Function(input)
//     }

// }
// function next(queue){
//     if(queue.length != 0){
//         return queue.shift();
//     }
// }
// function increaseSpeed (){
//    return speed++;
// }
// function decreaseSpeed(){
   
//     return speed--;
// }
// function test(input ,queue){
//     if(queue.length == 0 && input == undefined){
//         return false;
//     }else{
//         return true;
//     }
// }
// function reset(){
//     speed = 0;
//     position = "Q0"
//     positionQueue = []
// }

//  function getPositionQueue(){
//     for(let i = 0; i < positionQueue.length; i++){
//         setTimeout(()=>{
//             console.log("Updateed")
//         },3000)
//     }
   
//     // return positionQueue;
// }
// // const myObservable = new Observable((observer) => {
// //     let count = 0;  setInterval(() => {
// //       observer.next(count);
// //       count++;
// //     }, 1000);
// //   });

// module.exports ={
//     dfaFunction,reset,getPositionQueue
// }