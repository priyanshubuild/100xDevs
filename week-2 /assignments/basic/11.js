let obj={ A: [80, 90], B: [70, 75, 85] };

let highavg=0;
let hihgindex;

let keys=Object.keys(obj);

for (let i=0;i<keys.length;i++){

   let total=0;
   let marks=obj[keys[i]];
   for(let j=0;j<marks.length;j++){
    total=total+marks[j];
   }
   if(highavg<total/(marks.length)){
    highavg=total/(marks.length);
    console.log(highavg)
    hihgindex=i;
   }
}
console.log(keys[hihgindex]);