let arr=[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let obj={};
for(let object of arr){
    obj[object.id]=object.name;
}
console.log(obj);