function isSameTree(a,b){
            if(a==null&& b==null){
                  return "True"
            }
            if(a!=null && b!=null){
                  return (a.data==b.data) && isSameTree(a.left,b.left) && isSameTree(a.right,b.right)
            }
            return "False"
}