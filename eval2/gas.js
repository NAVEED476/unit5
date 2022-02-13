function circle(gas, cost) {
      var sum1 = 0;
      var total = 0; 
      var start = 0; 
   
      for (var i = 0; i < gas.length; i++) {
          var rem = gas[i] - cost[i];
   
          if (sum1 >= 0) { 
              sum1 += rem;
        
          } else {
              sum1 = rem;
              start = i;
          }
          total += rem;
      }
   
      if (total >= 0){
          return start;
      }else{
          return -1;
      }
  }




function runProgram(input) {
    
      input=input.trim().split("\n")
      let len =+input[0]

      let arr1 = input[1].trim().split(" ").map(Number)
      let arr2 = input[2].trim().split(" ").map(Number)

      //console.log(arr1,arr2)
      console.log(circle(arr1,arr2))
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5
    1 2 3 4 5
    3 4 5 1 2`);
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