let obj={ name: "alice", city: "delhi" };
let newobj={};
let keys=Object.keys(obj);
for(let i=0;i<keys.length;i++){
    let value=obj[keys[i]];
    newobj[keys[i]]=value[0].toUpperCase()+value.slice(1);
}
console.log(newobj);