let obj={ a: 100, b: 50, c: 20 }
    keys=Object.keys(obj);
let max=obj.a;
for (let i =0;i<(Object.keys(obj).length-1);i++){
     
     if(obj[keys[i]]<obj[keys[i+1]]){
        max=obj[keys[i+1]];
     }

}
console.log(max);