let obj={ name: "Rahul", age: 23, city: "Noida" };
let arr=["name","city"];

let newobj={};
newobj[arr[0]]=obj[arr[0]];
newobj[arr[1]]=obj[arr[1]];
console.log(newobj);