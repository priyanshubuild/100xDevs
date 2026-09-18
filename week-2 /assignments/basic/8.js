let obj = { A: [80, 90], B: [70, 75, 85] };

let keys = Object.keys(obj);

let highAvg = 0;
let highStudent;

for (let i = 0; i < keys.length; i++) {

    let marks = obj[keys[i]];
    let total = 0;

    for (let j = 0; j < marks.length; j++) {
        total += marks[j];
    }

    let avg = total / marks.length;

    if (avg > highAvg) {
        highAvg = avg;
        highStudent = keys[i];
    }
}

console.log(highStudent);