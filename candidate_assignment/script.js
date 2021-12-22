

let users = [
    {"user":"Amit"},
    {"user":"Sumit"},
    {"user":"Rajesh"},
    {"user":"Lalit"},
    {"user":"Raju"},
    {"user":"Geeta"}
];

let candidate = document.querySelector("#candidate");
let candidate_result = document.querySelector("#candidate_result");
let candidate_selected = document.querySelector("#candidate_selected");
let new_team = document.querySelector("#new_team");


users.forEach((user)=>{
    let btn = document.createElement("button");
    btn.className = "btn btn-light mx-1";
    btn.innerHTML = user["user"];
    candidate.append(btn);
})


var adduser = (inputobj)=>{

    // get name
    let newuser = inputobj.value;

    if(inputobj.value == ""){
        throw alert("Please Enter Candidate Name");
    }

    inputobj.value = "";
    inputobj.focus();

    // push in array
    users.push({"user":newuser});

    // creat button obj
    let btn = document.createElement("button");
    btn.className = "btn btn-light mx-1";
    btn.innerHTML = newuser;

    // append inside the Candidate Interview container
    candidate.append(btn);
}



var startInterview = ()=>{

    // Reset
    candidate_result.innerHTML = ""; 
    candidate_selected.innerHTML = "";
    new_team.innerHTML = "";

    console.log("\n\nConducting an Interview");

    users.map(val => {
        val.mark = Math.round(Math.random() * 100);
        console.log(val);


        // creat button obj
        let btn = document.createElement("button");
        btn.className = "btn btn-light mx-1";
        btn.innerHTML = `${val.user} - <span class='badge bg-secondary'>${val.mark}</span>`;

        candidate_result.append(btn);
    })

    

    console.log("\n\nSelected an Condidates");
    let selected_condidate = users.filter(val => val['mark'] > 60);
    selected_condidate.forEach((val) => {
        console.log(val);

         // creat button obj
         let btn = document.createElement("button");
         btn.className = "btn btn-light mx-1";
         btn.innerHTML = `${val.user} - <span class='badge bg-secondary'> ${val.mark}</span>`;
 
         candidate_selected.append(btn);

    });

    console.log("\n\nTeam A");
    let teamMember = selected_condidate.reduce((teamMember,val) => {
        //console.log(users.splice(users.indexOf(val['user']) - 1,1))
        //console.log(users.indexOf(val['user']));
        teamMember.push(val);

        // creat button obj
        let btn = document.createElement("button");
        btn.className = "btn btn-success mx-1";
        btn.innerHTML = val.user;

        new_team.append(btn);


        return teamMember;
    },[]);

    console.log(teamMember);


}




