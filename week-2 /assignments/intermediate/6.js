let arr=[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];
let output=[]; 
for ( let i =0; i< arr.length;i++){
    let found=false;

    for ( let j=0 ;j<output.length;j++){
       if(arr[i].id==output[j].id){
        found=true;
        break;
       }}
    if(found==false){
        output.push(arr[i]);
    }

    }

console.log(output);
