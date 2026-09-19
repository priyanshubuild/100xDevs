let obj={ name: "Alice", age: 25 };
let keys=Object.keys(obj);
let newstring="";
for(let i=0;i<keys.length;i++){
  newstring=newstring+keys[i]+"="+obj[keys[i]];
  if(i!=keys.length-1){
    newstring+="&";
  }

}
