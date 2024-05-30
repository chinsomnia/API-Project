const catURL =
  "https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_0XRQZtR5mvWdxdo1qYiWXGp2AQQoR9unQx09x3g8IliT3OdTlG6CO5zYxSgMbyY0";
const dogURL =
  "https://api.thedogapi.com/v1/images/search?limit=1&api_key=live_0XRQZtR5mvWdxdo1qYiWXGp2AQQoR9unQx09x3g8IliT3OdTlG6CO5zYxSgMbyY0";
const catContainer = document.querySelector(".cat-container");
const dogContainer = document.querySelector(".dog-container");
const catButton = document.querySelector(".cat-button");
const dogButton = document.querySelector(".dog-button");

// Cat Generator
const displayCat = async () => {
  try {
    const response = await fetch(catURL);
    const json = await response.json();
    console.log("JSON:", json);
    if (json && json.length > 0) {
      getCat(json[0]); // Pass the first cat object to getCat
    } else {
      console.log("No cat image found.");
    }
  } catch (err) {
    console.log("Error:", err);
  }
};

const getCat = (cat) => {
  const photo = cat.url; // Access the URL property from the cat object
  catContainer.classList.add("cats");
  
  const image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = "Cat photo";
  catContainer.appendChild(image);
};

// Dog Generator
const displayDog = async () => {
  try {
    const response = await fetch(dogURL);
    const json = await response.json();
    console.log("JSON:", json);
    if (json && json.length > 0) {
      getDog(json[0]); // Pass the first cat object to getCat
    } else {
      console.log("No dog image found.");
    }
  } catch (err) {
    console.log("Error:", err);
  }
};

const getDog = (dog) => {
  const photo = dog.url; // Access the URL property from the cat object
  dogContainer.classList.add("dogs");
  
  const image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_dogs");
  image.alt = "Dog photo";
  dogContainer.appendChild(image);
};

displayCat();
displayDog();

// Scoring function

const totalRounds = 5;
let round = 0;
let catScore = 0;
let dogScore = 0;


const resetImages = () => {
  catContainer.innerHTML = "";
  dogContainer.innerHTML = "";
};

catButton.addEventListener("click", async () => {
  resetImages();
  await displayCat();
  await displayDog();
  catScore++;
  round++;
  checkScore();
});
dogButton.addEventListener("click", async () => {
  resetImages();
  await displayCat();
  await displayDog();
  dogScore++;
  round++;
  checkScore();
});

function checkScore() { 
  if (round === totalRounds) {
    if (catScore > dogScore) {
      alert(`Cats Win! Cats: ${catScore}, Dogs: ${dogScore}`);
    } else if (dogScore > catScore) {
      alert(`Dogs Win! Dogs: ${dogScore}, Cats: ${catScore}`);
    } else {
      alert(`Its a Tie! Cats: ${catScore}, Dogs: ${dogScore}`);
    }
    round = 0;
    catScore = 0;
    dogScore = 0;
  }
}





// display random cat and dog images
// add event listener to cat and dog button
// if cat button is pressed, count at 1 to count
// create counter function
// create winner display function