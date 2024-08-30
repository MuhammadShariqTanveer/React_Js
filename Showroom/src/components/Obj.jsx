import React from "react";

const civic ={
  // imageUrl: "../../img\brv.jpeg",
  name: "Honda Civic",
  model : 2021, 
  mileage:"33,000km",
  color: "White",



 }
 
// 
 function ImageSetter(){
     return(
           
           <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 m-auto">
           <img class="w-auto h-32" src="./img/civic2.jpeg" alt="Sunset in the mountains"/>
           <div class="">
             <div class="font-bold text-xl mb-2">{civic.name}</div>
               <p class="text-gray-700 text-base">
      
    </p> 
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Model:{civic.model}</span>
    <span class="   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Mileage:{civic.mileage}</span>
    <span class="   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Color:{civic.color}</span>
  </div>
</div> 
     )
 }

 export default ImageSetter;