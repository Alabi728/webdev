function greeting() {
    var teamName =  document.getElementById("team-1").innerText;
    alert("Team member :  " + teamName + "");
}
function greeting1() {
    var teamName = document.getElementById("team-3").innerText;
    alert("Team member :  " + teamName + "");
}
function greeting2() {
    var teamName = document.getElementById("team-2").innerText;
    alert("Team member :  " + teamName + "");
}
function greeting3() {
    var teamName = document.getElementById("team-4").innerText;
    alert("Team member :  " + teamName + "");
}

function greeting4() {
    var userName = document.getElementById("input-name").value;
    var userEmail = document.getElementById("input-email").value;
    var userSubject = document.getElementById("input-subject").value;
    var userComment = document.getElementById("input-comment").value;
    alert("Name: " + userName + "\nEmail: " + userEmail + "" + "\nSubject: "
        + userSubject + "" + "\nComment: " + userComment + ""
    )
}



