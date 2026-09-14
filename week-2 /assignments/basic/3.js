let a={
    a:"x",
    b:"y",
    c:"z"
};

let b={};
kexs=Object.keys(a);
console.log(kexs);

console.log(kexs[0]);
for(let i=0;i<Object.keys(a).length;i++){
    b[a[kexs[i]]]=kexs[i];
}
console.log(b);