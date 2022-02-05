function hard(len,size,arr,left,right,value){
      let count = 0

     
    
     
     
      for(var i=left-1;i<right;i++){
            //console.log(left)
            if(arr[i]==value){
                  //console.log(arr[i])
                  count++
            }
            
      }
      console.log(count)

      // while(left<right){
      //       if(left==right){
      //             if(arr[left-1]==value || arr[right]==value){
      //                   count++
      //             }
      //       }
      //       else if(arr[left]==value || arr[right]==value){
      //             count++
      //       }
      //       left++;
            
      // }

      // console.log(count)

}






function runProgram(input) {

      input = input=input.trim().split("\n")
      let [len,size]=input[0].trim().split(" ").map(Number)
      let arr = input[1].trim().split(" ").map(Number)

      let line = 2

      for(var i=0;i<size;i++){
            let [left,right,value]=input[line++].trim().split(" ").map(Number)
            //console.log(len,size,arr,left,right,value)
            hard(len,size,arr,left,right,value)
      }
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2
`);
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