let obj={ a: 3, b: 1, c: 2 };

keys=Object.entries(obj);
keys.sort((a,b)=>{
    return a[1]-b[1];
});
console.log(keys);

