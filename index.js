function A(aa, t){
  let a=[]
  let nt=0;
  for(let i=0;i<aa.length;i++){
    for(j=0;j<aa.length;j++){
      if(i!<=j){
        if(aa[i]+aa[j]==t){
          return [aa[i], aa[j]]
        }
      }
    }
  }
  return []
}
A(pr1,pr2)
