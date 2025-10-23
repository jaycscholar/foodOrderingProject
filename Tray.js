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


        itemsForTracking.push("<br>" + itemNumberInTray + " " + food["name"] + " ")

        console.log("items for fg tracking" + itemsForTracking)
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
  }

  if (isTrayFull) {


    let itemInCart = document.createElement("menuItem");
    itemInCart.innerHTML = `
<p> Total = ${theTotal.toFixed(2)}
</p>

<div id="formBox"> </div>



</form>



`;

    theTray.appendChild(itemInCart);

    //Ajax Call
    loadContent()
    function loadContent() {
      fetch('checkoutForm.html')
        .then(response => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Get the response as plain text
        })
        .then(html => {
          // Create a temporary element to parse the HTML string
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // Find the specific part of the document you want to load
          const container = doc.querySelector('#AddressAndPayForm');

          if (container) {
            // Insert the content into the target element on the current page
            document.getElementById('formBox').innerHTML = container.innerHTML;

             if (logInJoe === 'true' || isTrayFull === 'true') {

 
            document.getElementById("firstName").value = 'Joe'
            document.getElementById("lastName").value = 'User'
            document.getElementById("address").value = '3333 Blue River'
            document.getElementById("city").value = 'Big Sur'
            document.getElementById("zip").value = '9000'
            document.getElementById("state").value = 'California'
 }
          } else {
            throw new Error('Element #ajax-container not found in fetched document.');
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }


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

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure min is an integer
    max = Math.floor(max); // Ensure max is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const randomNumber = getRandomInt(9000, 100000);

  order = "Order Number: " + randomNumber + "  " + itemsForTracking;

}







function placeOrder() {

   console.log("before submitting info")

  let customerInfo = []

  customerInfo.push({ "firstName": document.getElementById("firstName").value })
  customerInfo.push({ "lastName": document.getElementById("lastName").value })
  customerInfo.push({ "address": document.getElementById("address").value })
  customerInfo.push({ "city": document.getElementById("city").value })
  customerInfo.push({ "zip": document.getElementById("zip").value })
  customerInfo.push({ "state": document.getElementById("state").value })

  customerInfo.push({ "cardNumber": document.getElementById("cardNumber").value })
  customerInfo.push({ "nameOnCard": document.getElementById("nameOnCard").value })
  customerInfo.push({ "expDate": document.getElementById("expDate").value })
  customerInfo.push({ "CVV": document.getElementById("CVV").value })
  customerInfo.push({ "zipCode": document.getElementById("zipCode").value })

  console.log(customerInfo)

  clearTray();

  localStorage.setItem("tracking", order)
  let itemsIntracking = localStorage.getItem("tracking");
  console.log("items being tracked" + itemsIntracking);

 
  alert("Your Order has been placed");



}


