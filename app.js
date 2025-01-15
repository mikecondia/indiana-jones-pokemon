// const pokemonArray = ["images/1.gif", "images/4.gif", "images/7.gif", "images/10.gif","images/12.gif",
//   "images/13.gif", "images/16.gif", "images/19.gif", "images/21.gif", "images/23.gif", "images/25.gif","images/27.gif",
//   "images/29.gif","images/32.gif","images/35.gif","images/37.gif","images/39.gif","images/41.gif", "images/43.gif","images/46.gif","images/48.gif","images/50.gif",
//   "images/52.gif", "images/54.gif","images/56.gif", "images/58.gif", "images/60.gif", "images/63.gif", "images/66.gif", "images/69.gif","images/72.gif",
//   "images/74.gif", "images/77.gif", "images/79.gif", "images/81.gif", "images/83.gif", "images/84.gif",
//   "images/86.gif","images/88.gif", "images/90.gif", "images/92.gif", "images/96.gif", "images/98.gif", "images/100.gif",
//    "images/102.gif", "images/104.gif","images/108.gif", "images/109.gif", "images/113.gif", "images/114.gif",
//   "images/116.gif","images/118.gif","images/120.gif","images/122.gif","images/129.gif", "images/132.gif","images/133.gif","images/138.gif","images/147.gif","images/151.gif","images/175.gif"
// ];
const pokeball = "images/pokeball.png"; 
// // const slot1 = document.getElementById("image-container-1");
// // const slot2 = document.getElementById("image-container-2");
// // const slot3 = document.getElementById("image-container-3");
// // const slot4 = document.getElementById("image-container-4");
// // const slot5 = document.getElementById("image-container-5");
// // const slot6 = document.getElementById("image-container-6");
// // const slot7 = document.getElementById("image-container-7"); 
// // const slot8 = document.getElementById("image-container-8");
// // const slot9 = document.getElementById("image-container-9");
// // const slot10 = document.getElementById("image-container-10");
// // const slot11 = document.getElementById("image-container-11");
// // const slot12 = document.getElementById("image-container-12");
// // const slot13 = document.getElementById("image-container-13");
// // const slot14 = document.getElementById("image-container-14"); 
// // const slot15 = document.getElementById("image-container-15");
// // const slot16 = document.getElementById("image-container-16");
// // const slot17 = document.getElementById("image-container-17");
// // const slot18 = document.getElementById("image-container-18");
// // const slot19 = document.getElementById("image-container-19");
// // const slot20 = document.getElementById("image-container-20");
// // const slot21 = document.getElementById("image-container-21"); 
// // const slot22 = document.getElementById("image-container-22");
// // const slot23 = document.getElementById("image-container-23");
// // const slot24 = document.getElementById("image-container-24");
// // const slot25 = document.getElementById("image-container-25");
// // const slot26 = document.getElementById("image-container-26");
// // const slot27 = document.getElementById("image-container-27");
// // const slot28 = document.getElementById("image-container-28"); 
// // const slot29 = document.getElementById("image-container-29");
// // const slot30 = document.getElementById("image-container-30");
// // const slot31 = document.getElementById("image-container-31");
// // const slot32 = document.getElementById("image-container-32");
// // const slot33 = document.getElementById("image-container-33");
// // const slot34 = document.getElementById("image-container-34");
// // const slot35 = document.getElementById("image-container-35"); 
// // const slot36 = document.getElementById("image-container-36");
// // const slot37 = document.getElementById("image-container-37");
// // const slot38 = document.getElementById("image-container-38");
// // const slot39 = document.getElementById("image-container-39");
// // const slot40 = document.getElementById("image-container-40"); 

// // locationsArray = [slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot8,slot9,slot10,slot11,slot12,slot13,slot14,slot15,slot16,
// //   slot17,slot18,slot19,slot20,slot21,slot22,slot23,slot24,slot25,slot26,slot27,slot28,slot29,slot30,slot31,slot32,slot33,slot34,slot35,
// //   slot36, slot37,slot38,slot39,slot40]; 

// // Shuffle the array (using the Fisher-Yates algorithm)
// function shuffle(array) {
// for (let i = array.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [array[i], array[j]] = [array[j], array[i]];
// }
// return array;
// }
// const shuffledUrls = shuffle(pokemonArray);

// // Append images one at a time
// function appendImage() {
// if (shuffledUrls.length > 0) {
//   // const container = document.getElementById("image-container-1");
//   const container = document.querySelectorAll('.container-style');
//   const imageUrl = shuffledUrls.pop();
//   const img = document.createElement('img');
//   img.src = imageUrl;   
//   img.className = "pokemon-styles"
//   // img.id ='appended-image';
//   const randomIndex = Math.floor(Math.random() * container.length);
//   container[randomIndex].appendChild(img);
// }
// }
// function randomInterval(callback, minDelay, maxDelay) {
// function execute() {
//   appendImage(); // Call the provided function

//   // Schedule the next execution with a random delay
//   const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
//   setTimeout(execute, delay);
// }
// execute(); // Start the first execution
// }
// randomInterval(() => {
// }, 100, 4000); // Random delay between 1-5 seconds

// // Arrow Keys to move x-wing

// let angle = 0;
// const xWingRotate = document.getElementById("x-wing-fighter");

// //CONTROLS

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     angle -= 10; 
//     if(angle < -90) angle = -90; 
//     event.preventDefault();
//   } else if (event.key === 'ArrowRight') {
//     angle += 10;
//     event.preventDefault();
//     if(angle > 90) angle = 90; 
//   }
//   xWingRotate.style.transform = `rotate(${angle}deg)`;
//   if (event.key === ' ') {
//     const container = document.getElementById('x-wing-fighter'); 
//     const img = document.createElement('img');
//     img.src = 'images/pokeball.png'; // Replace with your image path
//     img.className = "pokeball-styles"
//     container.appendChild(img);
    
//   }
// });


// CREATING POKEBALLS
// Create the Projectile Object
// Create the canvas and get the 2D context

document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = innerWidth;
canvas.height = innerHeight;

// Torpedo object
const torpedo = {
  x: 0,
  y: canvas.height / 2,
  width: 20,
  height: 10,
  speed: 10
};
// Draw the torpedo
function draw() {
  document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      const container = document.getElementsByTagName('body'); 
      const img = document.createElement('img');
      img.src = 'images/pokeball.png'; // Replace with your image path
      img.className = "pokeball-styles"
      container.appendChild(img);
      
    }
  });
}

// Update torpedo position
function update() {
  torpedo.x += torpedo.speed;

  // Check if torpedo goes off screen
  if (torpedo.x > canvas.width) {
    torpedo.x = 0; 
  }

  draw();
}





// Start the game loop
// setInterval(update, 16); // 60 fps (approx)






























































