let menuItems = []



let storedItems = localStorage.getItem("itemAmount")
if (storedItems === null) { storedItems = 0 }




let itemsInCartArray = {}





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


               let itemNumberInTray = localStorage.getItem(food['name'])

               if (itemNumberInTray === null) {
                    storedItems = 0;
                    localStorage.setItem(food['name'], 0)
               }


               let retrievedCart = localStorage.getItem(food['name']);


               console.log("stored " + food['name'] + " " + retrievedCart);


               const menuItem = document.createElement("div");
               menuItem.className = `col-span-3 lg:col-span-1  p-3 `

               menuItem.id = food['name'];
               menuItem.innerHTML = ` 
                     <h3 class="text-2xl mb-2">
                     ${food['name']} 
                     </h3>

                                          <img class="max-h-50 lg:max-h-70 mx-auto" src="${food['image']}">
                     <section class="lg:h-30"> 
                     <p class=" overflow-y-auto"> 
                     ${food['description']}  

          
                     
                     </p>
                     
                     
                      </section>

<form class="relative bottom-0 left-0 right-0"> ${food['price']}
<input type="number" min="1" max="99" value="1" class="inline text-right" id='${food['name']}Amount' ></input>
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
     //just for the number in the cart (probably should have just done the array, but I did the number first)
     let numberofItems = 0;
     const item = foodAdd;
     const itemAmountID = foodAdd + 'Amount';

     const itemAmount = document.getElementById(itemAmountID);



     numberofItems = itemAmount.value

     itemAmount.value = 1;
     //set value back to 1

     storedItems = +storedItems;
     storedItems += +numberofItems;
     // + converts it to number
     localStorage.setItem("itemAmount", storedItems);

     console.log("idemID " + itemAmountID)
     console.log("added " + numberofItems + " " + item)
     console.log("your tray has " + storedItems + " items")

     updatetrayAmount();

     let retrievedStoredItem = localStorage.getItem(item)

     itemsInCartArray[item] = +retrievedStoredItem + +numberofItems;

     let addtoCartItemNumber = +retrievedStoredItem + +numberofItems

     localStorage.setItem(item, addtoCartItemNumber);

     let retrievedCart = localStorage.getItem(item)

     console.log(retrievedCart)
     console.log(itemsInCartArray)


}



updatetrayAmount();

function updatetrayAmount() {
     let trayAmount = document.getElementById("trayQ")
     trayAmount.innerHTML = storedItems;



}
