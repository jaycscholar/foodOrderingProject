addLeftColumn();

let idNumber = 0;

function addLeftColumn() {
     const leftColumn = document.getElementById("left-column");


     leftColumn.innerHTML =
          `

         <nav id="navigation" class="p-2 rounded lg:col-span-1 bg-gray-200">
      <button class="w-full p-2 bg-white rounded mb-2 text-left cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick="document.location='index.html'"><b>Back to main Page</b></button>


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

<button type="button" class="border rounded my-2 p-1 cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick="logInAdmin()"> Log-in  
</button>

</form>

`;

}




function logInAdmin() {
     const email = document.getElementById('adminUser')
     const psw = document.getElementById('adminPassword')





     if (email.value === "JayAdmin") {
          if (psw.value === "rest") {

               adminLoggedIn();
               //alert("logged in")

          } else if (psw.value !== "rest") { 
               alert("check password (hint: its 'rest')")
          }
     }
     else if (email.value !== "JayAdmin") {
          alert("Hint: JayAdmin")

     }

}

//so we can test without having to log-in ___ adminLoggedIn()

function adminLoggedIn() {

     fetchAndDisplayMenu();

     async function fetchAndDisplayMenu() {

          const theMenu = document.getElementById('adminSection')
          
          theMenu.innerHTML = `
     <h2 id="Menu Title" class="lg:col-span-3 text-3xl my-2 py-2"> Items in the Menu</h2>    
     
                         <button 
                    onClick="displayLogin()"
                    class="p-2 my-3 border rounded border-gray-400 cursor-pointer hover:bg-gray-50 hover:text-gray-700"
                    >
               Log Out
                    </button>

     `
          addItemForm = document.createElement("form")
          addItemForm.className = "grid grid-cols-5 border border-gray-400 rounded p-3"
          addItemForm.id = "addNew"
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
                    Image URL:
               </label>
               <input type="text" id="inputImage" name="input_image" required class="col-span-2 border border-gray-300 mb-3">
               </input>

               <label for="inputPrice" class="col-span-1 text-right mr-3"> 
                    Price: $
               </label>
               <input type="text" id="inputPrice" name="input_price" required class="col-span-1 border border-gray-300 mb-3">
               </input>


               <div class="col-span-4 text-right">
                    <button type='button' 
                    class="border rounded-md border-color-red px-2 inline cursor-pointer hover:bg-gray-50 hover:text-gray-700" onclick = "userAddItem()">Add Item</button> 
               </div>



`



          theMenu.appendChild(addItemForm)

          try {
               const response = await fetch("fullMenu.json")
               const menu = await response.json();



               menu.forEach((food) => {

                    const menuItem = document.createElement("div");
                    menuItem.className = `grid grid-cols-5 border border-gray-400 rounded p-6 my-3`

                    menuItem.id = food['name'];
                    menuItem.innerHTML = ` 
                    
                     <h3 class="text-2xl mb-2 col-span-5">
                     ${food['id']} : ${food['name']} 
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
                    <button type='button' class= "border rounded-md border-color-red px-2 inline cursor-pointer hover:bg-red-200 hover:text-gray-700" onClick= "removeItem('${food['name']}')">Remove Item</button> 
                 </div>

           
                     `

                     idNumber = food['id']

                    theMenu.appendChild(menuItem)



               })


          } catch (error) {
               alert("Error fetching user data with async/await:", error);
          }

                              const logoutBox = document.createElement("div")


                    //logoutBox.className = "p-2 border rounded border-gray-400 cursor-pointer hover:bg-gray-50 hover:text-gray-700"



     }



}


function removeItem (theItem) {
     const childElement = document.getElementById(theItem); 
    if (childElement) {
        childElement.remove();
        --idNumber;
    }
   console.log("item removed " + theItem)
   document.getElementById('newItem').className = 'lg:col-span-3 text-3xl my-2 py-2 hidden'

} 




function userAddItem() {
idNumber += 1 

document.getElementById("newItem").className = `
lg:col-span-3 text-3xl my-2 py-2 `

     const form = document.getElementById("addNew");
     const formData = new FormData(form);

     form.reset();

           const theMenu = document.getElementById('adminSection') 

 /*     for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);

  }
 */


const name = formData.get("input_item_name"); 
const description = formData.get("input_Description"); 
const image = formData.get("input_image"); 
const price = formData.get("input_price"); 



     console.log(name)
                    const menuItem = document.createElement("div");
                    menuItem.className = `grid grid-cols-5 border border-gray-400 rounded p-6 my-3`

                    menuItem.id = formData['input_item_name'];
                    
                    menuItem.innerHTML = ` 
                    
                     <h3 class="text-2xl mb-2 col-span-5">
                     ${idNumber} : ${name} 
                     </h3>


                    <div class="col-span-1 text-right mr-3"> 
                    Description:  
                    </div> 
                    <div class="col-span-4"> 
                    ${description}  
                    </div> 

                    <div class="col-span-1 text-right mr-3"> 
                    image:  
                    </div> 
                    <div class="col-span-4 my-2"> 
                    <img class="h-30" src=${image}>
                    </div> 

                    <div class="col-span-1 text-right mr-3"> 
                    price:  
                    </div> 
                    <div class="col-span-4"> 
                    ${price}  
                    </div> 

                                     <div class="col-span-4 text-right">
                    <button type='button' class= "border rounded-md border-color-red px-2 inline cursor-pointer hover:bg-red-200 hover:text-gray-700" onClick= "removeItem(${formData['input_item_name']})">Remove Item</button> 
                 </div>
                    
`


           theMenu.prepend(menuItem)

   
}


