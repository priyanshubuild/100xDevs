let obj={ a: 1, b: 2, c: 3 };
let obj2={ b: 4, c: 5, d: 6 };

let key=Object.keys(obj);
let keys=Object.keys(obj2);
let result=[];

for(let i=0;i<key.length;i++){
    for (let j=0;j<keys.length;j++){
        if(key[i]==keys[j]){
        result.push(key[i]);
    }
}
}
console.log(result);