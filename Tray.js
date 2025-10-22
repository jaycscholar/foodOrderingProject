fetchAndDisplayTray();

let order = ' '

async function fetchAndDisplayTray() {
  const theTray = document.getElementById("traySection");
  theTray.innerHTML = `    
<h2 class="col-span-3  p-2 text-2xl" >Items in tray</h2>

`;
  let theTotal = 0;

  isTrayFull = false;

  let itemsForTracking = [] 

  try {
    const response = await fetch("fullMenu.json");
    const menu = await response.json();

    menu.forEach((food) => {
      let itemNumberInTray = localStorage.getItem(food["name"]);



      if (itemNumberInTray > 0) {

itemsForTracking.push( "<br>" + itemNumberInTray + " " + food["name"] + " " )

        const trayItem = document.createElement("div");
        trayItem.className = `col-span-3 p-1 my-3 mx-5`;

        trayItem.id = food["name"];

        trayItem.innerHTML = ` 
 <h2 class="text-xl">
 ${food["name"]} 
</h3>

<section> 
<p> 
Cost ${food["price"]} X ${itemNumberInTray}
</p>

<p> 
</p>

</section>

`;

        theTray.appendChild(trayItem);

        console.log(food["name"] + " " + itemNumberInTray);

        let retrieveCost = food["price"].replace("$", "") * itemNumberInTray;

        theTotal += retrieveCost



        console.log("multiplied cost " + retrieveCost);

        isTrayFull = true;
      } else if (itemNumberInTray === null || itemNumberInTray === 0) {
        isTrayFull = false;
      }
    });
  } catch (error) {
    const errorLog = document.createElement("div");
    errorLog.innerHTML = `<p class="text-2xl my-12"> Uh oh, there's a problem </p> <p class="text-2xl mb-20"> ${error} </p>`
    theTray.appendChild(errorLog)
    //alert("Error fetching user data with async/await:", error);
  }

  if (isTrayFull) {
    let itemInCart = document.createElement("menuItem");
    itemInCart.innerHTML = `
<p> Total = ${theTotal.toFixed(2)}
</p>

<form class="mt-10 grid lg:grid-cols-3">
<h3 class="text-xl lg:col-span-3"> Enter Your Info: </h3>

<div class="p-2 my-1"> 
<label for="firstName">First Name:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="firstName" name="first_name" autocomplete="firstName" required>
</div>

<div class="p-2 my-1"> 
<label for="lastName">Last Name:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="lastName" name="last_name" autocomplete="lastName" required>
</div>

<div class="p-2 my-1"> 
<label for="address">Address:</label>
<input class="border border-gray-400 rounded ml-2" class="border border-gray-400 rounded ml-2" type="text" id="address" name="address" autocomplete="address" required>
</div>

<div class="p-2 my-1"> 
<label for="city">City:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="city" name="city" autocomplete="city" required>
</div>

<div class="p-2 my-1"> 
<label for="zip">Zip Code:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="zip" name="zip" autocomplete="zip_Code" required>
</div>

<div class="p-2 my-1"> 
<label for="state">State:</label>
<input class="border border-gray-400 rounded ml-2" type="text" id="state" name="state" autocomplete="state" required>
</div>


<button type="button" class="border rounded my-2 p-1" onclick="placeOrder()"> Place Order  
</button>

</form>



`;
    theTray.appendChild(itemInCart);

document.getElementById("firstName").value = 'Joe'
document.getElementById("lastName").value = 'User'
document.getElementById("address").value = '3333 Blue River'
document.getElementById("city").value = 'Big Sur' 
document.getElementById("zip").value = '9000' 
document.getElementById("state").value = 'California'
 

  } else if (!isTrayFull) {
    let itemInCart = document.createElement("menuItem");
    itemInCart.innerHTML = `
<p class="m-2"> Your Tray is empty, Click on <a href="index.html" class="cursor-pointer text-blue-700 hover:text-blue-200 "> View Menu </a> to add items to your Tray.
</p>

<p class="m-2"> 
Or click on <a href="trackOrder.html" class="cursor-pointer text-blue-700 hover:text-blue-200 ">Track My Order<a> to see your order status
</p>

`;
    theTray.appendChild(itemInCart);

    


  }
 


  if (logInJoe === 'true' || isTrayFull === 'true'){

   



}  

function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const randomNumber = getRandomInt(9000, 100000);

 order = "Order Number: " + randomNumber + " of " + itemsForTracking;


  
}







function placeOrder() {

  let customerInfo = []

  customerInfo.push({"firstName" : document.getElementById("firstName").value})
  customerInfo.push({"lastName" : document.getElementById("lastName").value})
  customerInfo.push({"address" : document.getElementById("address").value})
  customerInfo.push({"city" : document.getElementById("city").value})
  customerInfo.push({"zip" : document.getElementById("zip").value})
  customerInfo.push({"state" : document.getElementById("state").value})

  console.log(customerInfo)

clearTray();

localStorage.setItem("tracking", order) 
let itemsIntracking = localStorage.getItem("tracking");
console.log("items being tracked" + itemsIntracking); 


 alert("Your Order has been placed");



}


