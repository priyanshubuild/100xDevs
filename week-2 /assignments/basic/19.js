let obj={ a: 1, b: "hello", c: 3 };
isnumber=true;
let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    if(typeof obj[keys[i]]!="number"){
        isnumber=false;
    }
}
console.log(isnumber);
