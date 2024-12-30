const imageUrls = ["images/1.gif", "images/4.gif", "images/7.gif", "images/10.gif","images/12.gif",
    "images/13.gif", "images/16.gif", "images/19.gif", "images/21.gif", "images/23.gif", "images/25.gif","images/27.gif",
    "images/29.gif","images/32.gif","images/35.gif","images/37.gif","images/39.gif","images/41.gif", "images/43.gif","images/46.gif","images/48.gif","images/50.gif",
    "images/52.gif", "images/54.gif","images/56.gif", "images/58.gif", "images/60.gif", 
];
const container = document.getElementById("imageContainer"); 





imageUrls.forEach(url => {
  const img = new Image();
  img.src = url;
  img.alt = "Image"; // Set alt text for accessibility
  container.appendChild(img);
});









// const imageUrls = [
//     "images/1.gif"
// ]; 

// function getRandomImageUrl() {
//     const randomIndex = Math.floor(Math.random() * imageUrls.length);
//     return imageUrls[randomIndex];
//   }

//   function appendRandomImage() {
//     const imageUrl = getRandomImageUrl();
//     const imageElement = document.createElement("img");
//     imageElement.src = imageUrl;
//     document.body.appendChild(imageElement);
//   }






