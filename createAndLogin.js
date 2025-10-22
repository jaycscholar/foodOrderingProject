

let formContentHTML =

`
                    <form class="w-full p-2 bg-white rounded mb-2 text-left hidden" id="loginForm" > 
 
                    <label class="block px-1 rounded" for="email"> Email: </label>
                    <input  class="border p-1 rounded" name="email" type="email" id="email" > </input>
                    <label class="block px-1 rounded" for="password" autocomplete="current-password"> Password: </label>
                    <input  class="border p-1 rounded" name="password" type="password" id="password"> </input>
                    <button id="submitButton" type="button" onclick="runLogin()" class=" block border px-1 rounded mt-1 cursor-pointer hover:bg-gray-50 hover:text-gray-700"> 
                    submit</button>    
                    </form>
`;

//addLogin()

function addLogin() { 
// id = "loginForm"
const loginF = document.getElementById('loginForm');
let toHide = loginF.className;

let toShow = toHide.replace('hidden', '');
loginF.className = toShow;


}


function loggedIn(){
     document.getElementById('loginButton').className = `hidden`
     document.getElementById('loginForm').className = `w-full p-2 bg-white rounded mb-2 text-left`
     document.getElementById('loginForm').innerHTML = `
     Logged In as Joe User
     <button class="border border-gray-300 px-2 cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick="logOut()">Log Out</button>
     `


} 

function logOut(){
     localStorage.setItem('loggedInJoe', false)
       
}

function runLogin() {
const email = document.getElementById('email') 
const psw = document.getElementById('password') 





if (email.value === "fake@email.com" ){ 
     if (psw.value === "cat") {
    
      localStorage.setItem('loggedInJoe', true)         
      loggedIn()    
     //alert ("logged in")

     }else if (psw.value !== "cat"){
          alert("check password (hint: its 'cat')")
     }
}
else if (email.value !== "fake@email.com" ){
alert("Hint: fake@email.com")

}

} 



