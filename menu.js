let menuItems = []


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
         
                     menuItem.id = food['name']
                     menuItem.innerHTML = ` 
                     <h3 class="text-2xl">
                     ${food['name']} 
                     </h3>

                     <p class="h-38 overflow-y-auto"> 
                     ${food['description']}    
                     </p>                  
                     
<form> 
<input type="number" min="1" max="9" placeholder="1" class="inline" id='${food}number' ></input>
<button type='button' class= "border border-color-red px-2 inline" >Add</button> 
</form>

                     `  
          
                    theMenu.appendChild(menuItem)
     
     })


          } catch (error) {
               alert("Error fetching user data with async/await:", error);
          }

     }


