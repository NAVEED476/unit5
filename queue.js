function q(arr){
      let left =0;
      let right =1;
      let count  =1;
      while(left<arr.length  && right<arr.length){
            if(arr[left]>arr[right]){
                  count++
            }

            left++
            right++
      }

      return count
}


function runProgram(input) {
    input = input=input.trim().split("\n")

    let n = +input[0]
    let arr = input[1].trim().split(" ").map(Number)

     console.log(q(arr))
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`6
1 2 4 3 5 8`);
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