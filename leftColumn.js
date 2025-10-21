const leftColumn = document.getElementById("left-column");


               leftColumn.innerHTML =
               `

<button id="show menu button" class="bg-green-200 p-2 rounded block lg:hidden w-full" onclick="hideNavItems()">
                    Show options ---
               </button>  

               
                                 
  
               <nav id="navigation" class="bg-yellow-200 p-2 rounded lg:col-span-1">
                    <button class="w-full p-2 bg-white rounded mb-2 text-left"> Create An Account </button>
                    
                    <button class="w-full p-2 bg-white rounded mb-2 text-left" id="loginButton" onclick="addLogin()"> Login </button>
                    ${formContentHTML}
                    <button class="w-full p-2 bg-white rounded mb-2 text-left hidden" id="logoutB"> Logout </button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left"> View My Tray 
                    (<div id="trayQ" class="inline">x</div>)
                    </button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left" onclick="clearTray()"> Clear My Tray</button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left"> Track My order</button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left"> About</button>
               </nav>

`

                    ;

               //showLogOut(); 


               function showLogOut() {
                    const button = document.getElementById('logoutB')
                    let toHide = button.className

                    let toShow = toHide.replace('hidden', '');
                    button.className = toShow

               }

let showingNav = false;   


hideNavItems();
 


               function hideNavItems () {

                    const navigation = document.getElementById('navigation');
 
                    if (showingNav === false) {  

                    let toShow = navigation.className;
                    let toHide = toShow + ' hidden lg:block' 
                    navigation.className = toHide 
console.log("items Hidden");
                    showingNav = true;
 
                    } else if (showingNav === true) {

                    let toShow = navigation.className;
                    let toHide = toShow.replace(' hidden lg:block', '');
                    navigation.className = toHide 
console.log("items shown");
                    showingNav = false;
                         
                    }

               } 



function clearTray () {

     storedItems = 0;
localStorage.clear();
     console.log(localStorage.getItem("itemAmount"));

     updatetrayAmount();

      itemsInCartArray = []

}




// gonna need this
// localStorage.removeItem('yourKeyName');