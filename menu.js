let menuItems = []



let storedItems = localStorage.getItem("itemAmount")
if (storedItems === null) { storedItems = 0 }


const retrievedCart = localStorage.getItem("itemsInCart")
let itemsInCartArray = []

console.log(itemsInCartArray);

addMenu();

function addMenu() {


     fetchAndDisplayMenu();


     menuItems.forEach((food) => {
          const menuItem = document.createElement("div");
          menuItem.className = `col-span-3 lg:col-span-1 h-52 p-3 bg-blue-100`
          menuItem.innerHTML = ` ${food} 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation 
<form> 
<input type="number" min="1" max="9" placeholder="1" class="inline" id='${food}number' ></input>
<button type='button' class= "border border-color-red px-2 inline" >Add  </button> 
</form>
`

          theMenu.appendChild(menuItem)
     })



}

async function fetchAndDisplayMenu() {

     const theMenu = document.getElementById('menuArea')
     theMenu.innerHTML = `
     <h2 id="Menu Title" class="lg:col-span-3 text-3xl"> The Menu</h2>  
     `

     try {
          const response = await fetch("fullMenu.json")
          const menu = await response.json();

          menuItems.push(...menu)

          console.log(menuItems)

          menuItems.forEach((food) => {
               const menuItem = document.createElement("div");
               menuItem.className = `col-span-3 lg:col-span-1 h-60 p-3 bg-blue-100`

               menuItem.id = food['name'];
               menuItem.innerHTML = ` 
                     <h3 class="text-2xl">
                     ${food['name']} 
                     </h3>

                     <p class="h-38 overflow-y-auto"> 
                     ${food['description']}    
                     </p>                  
                     
<form> 
<input type="number" min="1" max="99" value="1" class="inline" id='${food['name']}Amount' ></input>
<button type='button' class= "border border-color-red px-2 inline" onclick = "addItem('${food['name']}')">Add</button> 
</form>

                     `

               theMenu.appendChild(menuItem)

          })


     } catch (error) {
          alert("Error fetching user data with async/await:", error);
     }

}

function addItem(foodAdd) {




console.log(itemsInCartArray);
 //just for the number in the cart (probably should have just done the array, but I did the number first)
     let numberofItems = 0
     const item = foodAdd
     const itemAmountID = foodAdd + 'Amount';

     const itemAmount = document.getElementById(itemAmountID);

     numberofItems = itemAmount.value

     storedItems = +storedItems;
     storedItems += +numberofItems;
     // + converts it to number
     localStorage.setItem("itemAmount", storedItems);

     console.log("idemID " + itemAmountID)
     console.log("added " + numberofItems + " " + item)
     console.log("your tray has " + storedItems + " items")

     updatetrayAmount();




}



updatetrayAmount();

function updatetrayAmount() {
     let trayAmount = document.getElementById("trayQ")
     trayAmount.innerHTML = storedItems;

}
