 addMenu ();

     function addMenu (){
     const theMenu = document.getElementById('menuArea')
     theMenu.innerHTML = `
<h2 id="Menu Title" class="lg:col-span-3 text-xl"> The Menu</h2>  
     `
 
let menuItems = ['fry', 'coin', 'sock', 'pie','rock', 'guitar','star']

menuItems.forEach((fruit) => {
const menuItem = document.createElement("div");
menuItem.className = `col-span-3 lg:col-span-1 h-52 p-3 bg-blue-100` 
menuItem.innerHTML = ` ${fruit} 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation 
<button>Add Item </button>
`

     theMenu.appendChild(menuItem)  
})



     }

