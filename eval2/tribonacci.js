

function tri(value){

      if(value === 0 ){
            return  0
      }
      else if(value === 1){
            return 1;
      }
      else if(value === 2){
            return 1;
      }
      
      return tri(value-1)+tri(value-2)+tri(value-3)
      
}


// function tri(num,arr){
//       if(num<0){
//             return
//       }
//       else if(arr[num]!=-1){
//             return arr[num]
//       }
//       else{
//             return arr[num]=tri(num-1,arr)+tri(num-2,arr)+tri(num-3,arr)
//       }
// }



// function runProgram(input) {
//       input=input.trim().split("\n")
//       let test = +input[0]
//       let line = 1
//       for(var i=0;i<test;i++){
//            let arr =  new Array(50)
//            arr.fill(-1)
//            arr[0]=0
//            arr[1]=1
//            arr[2]=1
//            let num = +input[line++]
//            console.log(tri(num,arr))
//       }

      

function runProgram(input){
      input=input.trim().split("\n")
      let test = +input[0]
      let line =1
      for(var i=0;i<test;i++){
            let value = +input[line++]
            console.log(tri(value))
      }
}
    
   
  
  if (process.env.USERNAME === "hp") {
    runProgram(`1
    4`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }