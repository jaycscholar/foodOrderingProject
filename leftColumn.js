const leftColumn = document.getElementById("left-column");


leftColumn.innerHTML =
     `

<button id="show menu button" class="p-2 bg-gray-100 rounded block lg:hidden w-full" onclick="hideNavItems()">
                    Show options ---
               </button>  

               
                                 
  
               <nav id="navigation" class="p-2 rounded lg:col-span-1 bg-gray-200">
                    <button class="w-full p-2 bg-white rounded mb-2 text-left hidden cursor-pointer hover:bg-gray-50 hover:text-gray-700"> Create An Account </button>
                    
                    <button class="w-full p-2 bg-white rounded mb-2 text-left cursor-pointer hover:bg-gray-50 hover:text-gray-700" id="loginButton" onclick="addLogin()"> Login </button>
                    ${formContentHTML}
                    <button class="w-full p-2 bg-white rounded mb-2 text-left hidden cursor-pointer hover:bg-gray-50 hover:text-gray-700" id="logoutB"> Logout </button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick="document.location='index.html'"><b>View Menu</b></button>

                    <button class="w-full p-2 bg-white rounded mb-2 text-left cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick="document.location='viewTray.html'"> View My Tray 
                    (<div id="trayQ" class="inline">x</div>) <br> and Place order
                    </button>
                    <button class="w-full p- bg-white rounded mb-2 text-center cursor-pointer hover:bg-red-200 hover:text-gray-700" onclick="clearTray()">Clear My Tray</button>
                    <button class="w-full p-2 bg-white rounded mb-2 text-left cursor-pointer hover:bg-gray-50 hover:text-gray-700 " onclick="document.location='trackOrder.html'"> Track My order</button>
             
                </nav> 
 
                 <button class=" px-2 bg-gray-100 rounded my-4 text-left" onclick="document.location='adminLogin.html'">Admin Login </button>

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



function hideNavItems() {

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



function clearTray() {
     let loggedInState = localStorage.getItem('loggedInJoe')
     //kind of cheating with this

     storedItems = 0;
     localStorage.clear();

     updatetrayAmount();

     window.location.reload();

     itemsInCartArray = []

     localStorage.setItem('loggedInJoe', loggedInState)

}




// gonna need this
// localStorage.removeItem('yourKeyName');