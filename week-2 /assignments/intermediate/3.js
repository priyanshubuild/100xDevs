let obj={ a: 0, b: null, c: "hello", d: undefined, e: 5 };
let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    if(obj[keys[i]]==0||obj[keys[i]]==null||obj[keys[i]]==undefined){
        delete obj[keys[i]];
    }
}
console.log(obj);