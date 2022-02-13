let arr = [2,-4,6,8,-9]

let str=""

for(var i=0;i<arr.length;i++){
      if(arr[i]<0){
            str+="0"
      }
      else{
            str+=arr[i]
      }
}

console.log(str)


