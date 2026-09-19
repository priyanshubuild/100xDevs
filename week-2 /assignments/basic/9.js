let obj={ x: [1,2,3], y: [2,3,4], z: [4,5] }
output=[];
let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    let val=obj[keys[i]];
    for(let j=0;j<val.length;j++){
      output.push(val[j]);
    }
}
console.log(output);
const newoutput=output.filter(filterlogic=(value,index)=>{
   return output.indexOf(value)===index;
});
console.log(newoutput);

//<any array>.indexOf(value); return the index of first occureance of that value in that array
/* we can use also  if (!unique.includes(arr[i])) {
    unique.push(arr[i]);
     }*/