//I should bring Form HTML Here

//addLogin()

function addLogin() { 
// id = "loginForm"
const loginF = document.getElementById('loginForm');
let toHide = loginF.className;

let toShow = toHide.replace('hidden', '');
loginF.className = toShow;


}


function runLogin() {
const email = document.getElementById('email')    
alert(email.value)

} 

