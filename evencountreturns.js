
//Enter code here

function runProgram(input) {
    
   //console.log(input)

   console.log(even(input))


   function even(input){
       let mat=[]
      for(var i=0;i<input.length;i++){
          let count = 0;
          for(var j=i;j<input.length;j++){
              if(input[j]%2==0){
                  count++
              }
              
          }

          mat.push(count)
      }
      return mat.join(' ')
   }
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`574674546476`);
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




