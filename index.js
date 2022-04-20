console.log("working");

//Q1.
let studentRecords = [{name:"John",id:123,marks:98},
                   {name: "Baba",id:101,marks:23},
                {name:"yaga",id:200,marks:45},
            {name:"Wick",id:115,marks:75}];

    let arr = studentRecords.map(x=>x.name.toUpperCase());
    console.log(arr);


//Q2.
let arr1 = studentRecords.filter(x=> x.marks>50);
console.log(arr1);


//Q3.
let arr2 = studentRecords.filter(x=> x.marks>50 && x.id>120);
console.log(arr2);

//Q4.
let arr3 = studentRecords.reduce((accu,curr)=> accu+curr.marks,0);
console.log(arr3);

//Q5.
let arr4 = studentRecords.filter(x=> x.marks>50);
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i].name);
}

//Q6.
let arr5 = studentRecords.filter(x=> x.id>120);
let arr6 = arr5.reduce((accu,curr)=>accu+curr.marks,0);
console.log(arr6);

//Q7.
for(let x of studentRecords){
    if(x.marks>50){
        x.marks=x.marks+15;
    }
}
let arr7 = studentRecords.filter(x=> x.marks>50);
let arr8 = studentRecords.reduce((accu,curr)=> accu+curr.marks,0);
console.log(arr8);

//Q8.

let student1 = {
    name:"Monu",
    class:11,
    rollno:1
}
let student2 ={
    name:"Sonu",
    class:11,
    rollno:2
}
let student3 ={
    name:"Tonu",
    class:11,
    rollno:3
}
let student4 ={
    name:"Tappu",
    class:11,
    rollno:4
}
let student5 ={
    name:"Titu",
    class:11,
    rollno:5
}
let student6 ={
    name:"Pintu",
    class:11,
    rollno:6
}

let student7 = [{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(student7);
