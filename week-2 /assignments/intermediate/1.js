let obj=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];
let relobj={};
for(let i=0;i<obj.length;i++){
    let uname=obj[i].user;
     let total=0;
    for(let j=0;j<obj.length;j++){
        if(obj[j].user==uname){
            total+=obj[j].amount;
        }
        
    }
        let relname=obj[i].user;
   relobj[relname]=total;
}
console.log(relobj);