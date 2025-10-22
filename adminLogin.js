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

