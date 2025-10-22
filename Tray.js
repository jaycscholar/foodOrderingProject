




fetchAndDisplayTray();



async function fetchAndDisplayTray(){

const theTray = document.getElementById("traySection");
theTray.innerHTML = `    
<h2 class="col-span-3  p-2 text-2xl" >Items in tray</h2>

`
let theTotal = 0; 

isTrayFull = false;

try {
     const response = await fetch("fullMenu.json")
     const menu = await response.json();

     menu.forEach((food) => {
   

          let itemNumberInTray = localStorage.getItem(food['name'])

     if (itemNumberInTray > 0){
const trayItem = document.createElement("div");
trayItem.className = `col-span-3 p-1 my-3 mx-5`;

trayItem.id = food['name'];

 trayItem.innerHTML = ` 
 <h2 class="text-xl">
 ${food['name']} 
</h3>

<section> 
<p> 
Cost ${food['price']} X ${itemNumberInTray}
</p>

<p> 
</p>

</section>

`

     theTray.appendChild(trayItem)

      console.log(food['name'] + " " + itemNumberInTray)    

let retrieveCost = food['price'].replace("$", "") * itemNumberInTray

theTotal += retrieveCost 

console.log("multiplied cost "+ retrieveCost)

isTrayFull = true;

     } else if (itemNumberInTray === null || itemNumberInTray === 0){

          isTrayFull = false;


     }
     })

}catch (error) {
          alert("Error fetching user data with async/await:", error);
     }


if(isTrayFull){

let itemInCart = document.createElement("menuItem")
itemInCart.innerHTML = `
<p> Total = ${theTotal}
</p>

<p>
<button class="border rounded my-2 p-1" onclick="placeOrder()"> Place Order  
</button>
</p>
`
theTray.appendChild(itemInCart)



}

else if (!isTrayFull){ 
let itemInCart = document.createElement("menuItem")
itemInCart.innerHTML = `
<p class="m-2"> Your Tray is empty, Click on <a href="index.html"> View Menu </a> to add items to your Tray.
</p>

<p class="m-2"> 
Or click on <a href="trackOrder.html">Track My Order<a> to see your order status
</p>

`
theTray.appendChild(itemInCart)



}



  

}


function placeOrder() {
     alert("Your Order has been placed")
     clearTray()

}