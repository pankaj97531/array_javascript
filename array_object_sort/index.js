const arr =[
  {name : "aname1",age :22},
  {name : "xname2",age :13},
  {name : "cname3",age :42},
  {name : "vname4",age :25},
  {name : "gname5",age :36},
  {name : "mname6",age :17}
]

const arr2= ['aname','xname','dname','pname','bname']

arr.sort(mySortstring)

function mySort(a,b){
  if(a.age > b.age){
    return 1
  }else if(a.age===b.age){
    return 0
  }else{
    return -1
  }
}
function mySortstring(a,b){
  if(a.name > b.name){
    return 1
  }else if(a.name===b.name){
    return 0
  }else{
    return -1
  }
}

console.log(arr)
