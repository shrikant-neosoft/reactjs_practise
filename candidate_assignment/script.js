

let users = [
    {"user":"Amit"},
    {"user":"Sumit"},
    {"user":"Rajesh"},
    {"user":"Lalit"},
    {"user":"Raju"},
    {"user":"Geeta"}
];


console.log("Conducting an Interview");
users.map(val => {
    val.mark = Math.round(Math.random() * 100);
    console.log(val);
})

console.log("\n\nSelected an Condidates");
let selected_condidate = users.filter(val => val['mark'] > 60);
selected_condidate.forEach((val) => {
    console.log(val);
});


let teamA = [];
let i = "";
console.log("\n\nTeam A");
selected_condidate.reduce((accu,val) => {
    teamA.push(val['user'])
},i);

console.log(teamA);




