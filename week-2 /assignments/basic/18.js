let arr=[{ id: 1, name: "A" }, { id: 2, name: "B" }];
let obj={}
for (let i=0;i<arr.length;i++){
    obj[i+1]=arr[i];
}
console.log(obj);