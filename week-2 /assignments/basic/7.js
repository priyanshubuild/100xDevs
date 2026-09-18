let obj={ a: 20, b: 60, c: 40, d: 90 };
let output={};
let osho;
 let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
   console.log(keys[i]);
    if((obj[keys[i]])>50){
        output[keys[i]]=obj[keys[i]];
    }
    
}

console.log(output);