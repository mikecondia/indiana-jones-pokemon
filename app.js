const pokemonArray = ["images/1.gif", "images/4.gif", "images/7.gif", "images/10.gif","images/12.gif",
    "images/13.gif", "images/16.gif", "images/19.gif", "images/21.gif", "images/23.gif", "images/25.gif","images/27.gif",
    "images/29.gif","images/32.gif","images/35.gif","images/37.gif","images/39.gif","images/41.gif", "images/43.gif","images/46.gif","images/48.gif","images/50.gif",
    "images/52.gif", "images/54.gif","images/56.gif", "images/58.gif", "images/60.gif", "images/63.gif", "images/66.gif", "images/69.gif","images/72.gif",
    "images/74.gif", "images/77.gif", "images/79.gif", "images/81.gif", "images/83.gif", "images/84.gif",
    "images/86.gif","images/88.gif", "images/90.gif", "images/92.gif", "images/96.gif", "images/98.gif", "images/100.gif",
     "images/102.gif", "images/104.gif","images/108.gif", "images/109.gif", "images/113.gif", "images/114.gif",
    "images/116.gif","images/118.gif","images/120.gif","images/122.gif","images/129.gif", "images/132.gif","images/133.gif","images/138.gif","images/147.gif","images/151.gif","images/175.gif"
];

// Shuffle the array (using the Fisher-Yates algorithm)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledUrls = shuffle(pokemonArray);

// Append images one at a time
function appendImage() {
  if (shuffledUrls.length > 0) {
    const imageUrl = shuffledUrls.pop();

    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  }
}
function randomInterval(callback, minDelay, maxDelay) {
  function execute() {
    appendImage(); // Call the provided function

    // Schedule the next execution with a random delay
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
    setTimeout(execute, delay);
  }
  execute(); // Start the first execution
}
randomInterval(() => {
  }, 100, 1000); // Random delay between 1-5 seconds




















// const container = document.getElementById("image-container"); 
// // const randomIndex = Math.floor(Math.random() * pokemonArray.length);
//     const img = document.createElement("img");
//     const imageUrl =  pokemonArray;
//     // const imageUrl = pokemonArray[randomIndex];
//     img.src = imageUrl;
//    // Append the image to the container
//     container.appendChild(img);
//         // }



// // // Append Pokemon Image
//   function appendRandomPokemon() {
 
  
    
    
//     // const container = document.getElementById("image-container"); 
//   // Get a random index from the array
   
//           //  Create an image element
//     const container = document.getElementById("image-container"); 
//     const img = document.createElement("img");
//     const imageUrl =  shuffledArray[i];
//     // const imageUrl = pokemonArray[randomIndex];
//     img.src = imageUrl;
//    // Append the image to the container
//     container.appendChild(img);
//         }
        
      // }
  //     function appendRandomPokemon(){
  //     const container = document.getElementById("image-container");
  //   const imageUrl = uniqueRandomArray[randomIndex]; 
  //   Create an image element
  //   const img = document.createElement("img");
  //   const imageUrl = pokemonArray[randomIndex];
  //   img.src = imageUrl;
  //  // Append the image to the container
  //   container.appendChild(img);
  // }


//   let imageCount = 0;
//   const maxImages = 61;
//   const intervalId = setInterval(() => {
//   if (imageCount < maxImages) {
//     // Append your image here
//     appendRadnomPokemon(); 
//     imageCount++;
//   } else {
//     clearInterval(intervalId); // Stop the interval when the limit is reached
//   }
// }, 300); 


















