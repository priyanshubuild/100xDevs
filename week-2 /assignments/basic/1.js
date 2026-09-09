let a={
    food:[10,20,30],
    travel:[5,15],
    bills:[40,60]
};

let sumOfFood=0;
let sumOfTravel=0;
let sumOfBills=0;

for( let i=0;i<a.food.length;i++){
    sumOfFood=sumOfFood+a.food[i];
    
  
}
for(let i=0;i<a.travel.length;i++){
    sumOfTravel=sumOfTravel+a.travel[i];
}
for(let i=0;i<a.bills.length;i++){
      sumOfBills=sumOfBills+a.bills[i];
}

let newobj ={
    food: sumOfFood,
    travel:sumOfTravel,
    bills:sumOfBills
};

console.log(newobj);