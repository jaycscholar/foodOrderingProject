addLeftColumn();

function addLeftColumn() {
     const leftColumn = document.getElementById("left-column");


     leftColumn.innerHTML =
          `

         <nav id="navigation" class="p-2 rounded lg:col-span-1 bg-gray-200">
      <button class="w-full p-2 bg-white rounded mb-2 text-left" onclick="document.location='index.html'"><b>Back to main Page</b></button>


</nav>     
     `
}

displayLogin()

function displayLogin() {
     const theTray = document.getElementById("adminSection");
     theTray.innerHTML = `    
<h2 class="col-span-3  p-2 text-2xl" >Administrator Log-in</h2>

<form class="p-3">

<div class="p-2 my-1"> 
<label for="adminUser">Admin Username:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="adminUser" name="admin-user" autocomplete="YumFoodCorporatedAdmin" required>
</div>

<div class="p-2 my-1"> 
<label for="adminPassword">Admin Password:</label>
<input class="border border-gray-400 rounded ml-2" type="password" id="adminPassword" name="admin_password" autocomplete="YumFoodCorporatedPassword" required>
</div>

<button type="button" class="border rounded my-2 p-1" onclick="logInAdmin()"> Log-in  
</button>

</form>

`;

}

// 
adminLoggedIn();


function logInAdmin() {
     const email = document.getElementById('adminUser')
     const psw = document.getElementById('adminPassword')





     if (email.value === "JayAdmin") {
          if (psw.value === "shoe") {

               adminLoggedIn();
               alert("logged in")

          } else if (psw.value !== "shoe") {
               alert("check password (hint: its 'shoe')")
          }
     }
     else if (email.value !== "JayAdmin") {
          alert("Hint: JayAdmin")

     }

}



function adminLoggedIn() {

     fetchAndDisplayMenu();

     async function fetchAndDisplayMenu() {

          const theMenu = document.getElementById('adminSection')
          theMenu.innerHTML = `
     <h2 id="Menu Title" class="lg:col-span-3 text-3xl my-2 py-2"> Items in the Menu</h2>  
     `
          addItemForm = document.createElement("form")
          addItemForm.className = "grid grid-cols-5 border border-gray-400 rounded p-3"
          addItemForm.innerHTML =
               `
               <h3 class="text-2xl mb-2 col-span-5 text-left pl-20">
                    Add Item
               </h3>



               <label for="inputItemName" class="col-span-1 text-right mr-3"> 
                    Item Name:
               </label>
               <input type="text" id="inputItemName" name="input_item_name" required class="col-span-4 border border-gray-300 mb-3">
               </input>

               <label for="inputDescription" class="col-span-1 text-right mr-3"> 
                    Description:
               </label>
               <input type="text" id="inputDescription" name="input_Description" required class="col-span-4 border border-gray-300 mb-3">
               </input>

               <label for="inputImage" class="col-span-1 text-right mr-3"> 
                    Image:
               </label>
               <input type="text" id="inputImage" name="input_image" required class="col-span-4 border border-gray-300 mb-3">
               </input>


               <div class="col-span-4 text-right">
                    <button type='button' class= "border rounded-md border-color-red px-2 inline" onclick="additem()">Add Item</button> 
               </div>



`

          theMenu.appendChild(addItemForm)

          try {
               const response = await fetch("fullMenu.json")
               const menu = await response.json();



               menu.forEach((food) => {
                    let itemNumberInTray = localStorage.getItem(food['name'])
                    if (itemNumberInTray === null) {
                         storedItems = 0;
                         localStorage.setItem(food['name'], 0)
                    }

                    let retrievedCart = localStorage.getItem(food['name']);

                    //console.log("stored " + food['name'] + " " + retrievedCart);

                    const menuItem = document.createElement("div");
                    menuItem.className = `grid grid-cols-5 border border-gray-400 rounded p-6 my-3`

                    menuItem.id = food['name'];
                    menuItem.innerHTML = ` 
                    
                     <h3 class="text-2xl mb-2 col-span-5">
                     Name: ${food['name']} 
                     </h3>


                    <div class="col-span-1 text-right mr-3"> 
                    Description:  
                    </div> 
                    <div class="col-span-4"> 
                    ${food['description']}  
                    </div>
                    
                    <div class="col-span-1 text-right mr-3"> 
                    Image:  
                    </div> 
                    <div class="col-span-4 my-3"> 
                    <img class="h-30" src="${food['image']}">
                    </div>

                    <div class="col-span-1 text-right mr-3"> 
                    Price:  
                    </div> 
                    <div class="col-span-4"> 
                    ${food['price']}
                    </div>



                 
              

                 <div class="col-span-4 text-right">
                    <button type='button' class= "border rounded-md border-color-red px-2 inline" onclick = "removeItem('${food['name']}')">Remove Item</button> 
                 </div>

           
                     `

                    theMenu.appendChild(menuItem)

               })


          } catch (error) {
               alert("Error fetching user data with async/await:", error);
          }

     }



}