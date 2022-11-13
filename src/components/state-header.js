
//  import { Observable } from 'rxjs';
 
 const regex = new RegExp("^([a-j])+");

 let positionQueue = []
 let testCase ;
 let position = "Q0";
 let speed = 0;
 let found 
 let queue



function dfaFunction(input){
    // console.log("What are you ",pQue)
    // positionQueue = pQue
    testCase = regex.test(input);
    found = input.match(/^([a-j])+/g);
    queue = found[0].split("");
    if(testCase && position == "Q0" ){
        q0Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q1"){
        q1Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q2"){
        q2Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q2"){
        q3Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
        
    }else if(testCase && position == "Q3"){
        q3Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q4"){
        q4Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q5"){
        q5Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q6"){
        q6Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else if(testCase && position == "Q7"){
        q7Function(next(queue),queue)
        // console.log("Positions :"+JSON.stringify(positionQueue,null,2))
        return positionQueue
        // return JSON.stringify(positionQueue,null,2);
    }else{
       return false;
    }
}
function q0Function(input,queue){
    position = "Q0";
    // setPosition("Q0")
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
   
    if(input == "a"){
        q2Function(next(queue),queue)
    }
    else if(input == "b"){
        q1Function(next(queue),queue)
    }else{
        q0Function(next(queue),queue)
    }
    positionQueue.push({
        input:null,
        speed:speed,
        position:position
    })
}
function q1Function(input,queue){
    position= "Q1"
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "a"){
         q3Function(next(queue),queue)
    }else{
        q1Function(next(queue),queue)
    }

}
function q2Function(input,queue){
    position = "Q2"
    // setPosition("Q2")
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "a"){
        q0Function(next(queue),queue)
    }else if(input == "b"){
        q1Function(next(queue),queue)
    }else{
        q2Function(next(queue),queue)
    }
    

}
function q3Function(input,queue){
    position = "Q3"
    // setPosition("Q3")
    console.log("Input: "+input+" Position: "+position)
    
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "a"){
        q0Function(next(queue),queue)
    }else if(input == "c"){
        q4Function(next(queue),queue)
    }else{
        q3Function(next(queue),queue)
    }
    

}
function q4Function(input,queue){
    position = "Q4"
    // setPosition("Q4")
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "i"){
        increaseSpeed()
        q3Function(next(queue),queue)
    }else if(input == "e"){
        increaseSpeed()
        q6Function(next(queue),queue)
    }else if(input == "d"){
        increaseSpeed()
        q5Function(next(queue),queue)
    }else{
        q4Function(next(queue),queue)
    }
    

}
function q5Function(input,queue){
    position = "Q5"
    // setPosition("Q5")
    console.log("Input: "+input+" Position: "+position)
   
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "b"){
        speed= 0
        q4Function(next(queue),queue)
    }else if(input == "h"){
        q7Function(next(queue),queue)
    }else if(input == "f"){
            // increase speed
            increaseSpeed()
    }else if(input == "g"){
        // decrease speed
        // console.log("Speed",speed)
        if((speed-1)!=0){
            decreaseSpeed()
        }else{
            decreaseSpeed()
            q4Function(next(queue),queue)
        }
    }
   
    if(speed!=0 && queue.length!=0 ){        
        q5Function(next(queue),queue)
    }
   

}
function q6Function(input,queue){
    position = "Q6"
    // setPosition("Q6")
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "b"){
        speed= 0
        q4Function(next(queue),queue)
    }else if(input == "f"){
        // increase speed
        increaseSpeed()
    }else if(input == "g"){
        // decrease speed
        if((speed-1)!=0){
            decreaseSpeed()
        }else{
            decreaseSpeed()
            q4Function(next(queue),queue)
        }
    }
    if(speed != 0 && queue.length!=0){
        q6Function(next(queue),queue)
    }
}    
function q7Function(input,queue){
    position = "Q7"
    // setPosition("Q7")
    console.log("Input: "+input+" Position: "+position)
    if(!test(input,queue)){
        return ;
    }
    positionQueue.push({
        input:input,
        speed:speed,
        position:position
    })
    if(input == "g"){
        q5Function(next(queue),queue)
    }else{
        q7Function(next(queue),queue)
    }
    

}
function next(queue){
    if(queue.length != 0){
        return queue.shift();
    }
}
function increaseSpeed (){
   return speed++;
}
function decreaseSpeed(){
   
    return speed--;
}
function test(input ,queue){
    if(queue.length == 0 && input == undefined){
        return false;
    }else{
        return true;
    }
}
function reset(){
    speed = 0;
    position = "Q0"
    positionQueue = []
}

 function getPositionQueue(){
    for(let i = 0; i < positionQueue.length; i++){
        setTimeout(()=>{
            console.log("Updateed")
        },3000)
    }
   
    // return positionQueue;
}
// const myObservable = new Observable((observer) => {
//     let count = 0;  setInterval(() => {
//       observer.next(count);
//       count++;
//     }, 1000);
//   });

module.exports ={
    dfaFunction,reset,getPositionQueue
}