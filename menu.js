 addMenu ();

     function addMenu (){
     const theMenu = document.getElementById('menuArea')
     theMenu.innerHTML = `
<h2 id="Menu Title" class="lg:col-span-3 text-xl"> The Menu</h2>  
     `
 
let menuItems = ['fry', 'coin', 'sock', 'pie','rock', 'guitar','star']

menuItems.forEach((food) => {
const menuItem = document.createElement("div");
menuItem.className = `col-span-3 lg:col-span-1 h-52 p-3 bg-blue-100` 
menuItem.innerHTML = ` ${food} 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation 
<input type="number" min="1" max="3" placeholder="1" class="inline" id='${food}' ></input>
<button class= "border border-color-red px-2 inline" >Add  </button> 

`

     theMenu.appendChild(menuItem)  
})



     }

