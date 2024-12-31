const imageUrls = ["images/1.gif", "images/4.gif", "images/7.gif", "images/10.gif","images/12.gif",
    "images/13.gif", "images/16.gif", "images/19.gif", "images/21.gif", "images/23.gif", "images/25.gif","images/27.gif",
    "images/29.gif","images/32.gif","images/35.gif","images/37.gif","images/39.gif","images/41.gif", "images/43.gif","images/46.gif","images/48.gif","images/50.gif",
    "images/52.gif", "images/54.gif","images/56.gif", "images/58.gif", "images/60.gif", "images/63.gif", "images/66.gif", "images/69.gif","images/72.gif",
    "images/74.gif", "images/77.gif", "images/79.gif", "images/81.gif", "images/83.gif", "images/84.gif",
    "images/86.gif","images/88.gif", "images/90.gif", "images/92.gif", "images/96.gif", "images/98.gif", "images/100.gif",
     "images/102.gif", "images/104.gif","images/108.gif", "images/109.gif", "images/113.gif", "images/114.gif",
    "images/116.gif","images/118.gif","images/120.gif","images/122.gif","images/129.gif", "images/132.gif","images/133.gif","images/138.gif","images/147.gif","images/151.gif","images/175.gif"
];



function appendRandomPokemon() {
    const container = document.getElementById("image-container"); 
    // Replace with your container ID
  
    // Get a random index from the array
   
   
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
  
    
    const imageUrl = imageUrls[randomIndex];
  
    // Create an image element
    const img = document.createElement("img");
    img.src = imageUrl;
  
    // Append the image to the container
    container.appendChild(img);
}
  setInterval(appendRandomPokemon,100)

  











