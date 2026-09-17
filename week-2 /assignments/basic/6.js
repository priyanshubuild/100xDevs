let obj=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let output={};
let arr1=[];
let arr2=[];

for(let i=0;i<obj.length;i++){

    if(obj[i].city=="Delhi"){
       arr1.push(obj[i].name);
        
    }
    if(obj[i].city=="Mumbai"){
        arr2.push(obj[i].name);
    }    
}
output["Delhi"]=arr1;
output["Mumbai"]=arr2;


console.log(output);


