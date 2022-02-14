// function flowers(len,val,arr){
//       for(var i=0;i<len;i++){
//             if(!len) return "Yes"

//             if(!flowers[i]==1 && !flowers[i-1]==1 && !flowers[i+1]==1){
//                   flowers[i]=1
//                   len--
//             }

//             return "Yes"
//       }
//       return "No"
// }

var flowers = function(arr, n) {
      if(n===0)return "Yes";
      for(let i=0; i<arr.length; i++){
          if( !arr[i-1] && !arr[i] && !arr[i+1] ){
              arr[i] = 1
             n--;
          }
          if(n===0)return "Yes"
      }
      return "No"
  };

function runProgram(input) {
      input=input.trim().split("\n")
      let test = +input[0]
      let line = 1;
      for(var i=0;i<test;i++){
            let [len,value] = input[line++].trim().split(" ").map(Number)
            let arr = input[line++].trim().split(" ").map(Number)

            console.log(len,arr)
            console.log(flowers(len,value,arr))
      }
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`1
    5 1
    1 0 0 0 1`);
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