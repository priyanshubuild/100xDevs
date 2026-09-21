let obj=[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
];

let result={};

for(let i=0;i<obj.length;i++){
    let name=obj[i];
    if( result[name["category"]]==undefined){
        result[name["category"]]=name["price"];
    }
    else{
      result[name["category"]]+=name["price"];
    }
}
console.log(result);