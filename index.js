// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");


}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.

themeButton.addEventListener("click", toggleDarkMode);


// Add your query for the sign now button here
const signNowButton = document.querySelector("#sign-now-button");



// Add a click event listener to the sign now button here
//???
//signNowButton.addEventListener("click", addSignature);
const addSignature = (person) => {
  /*append added signatures to "signatures class" */
  //fname = document.getElementById('fname').value;
  //htown = document.getElementById('htown').value;
  //email = document.getElementById('email').value;

  let newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  let signatureSection = document.querySelector('.signatures');
  signatureSection.appendChild(newSignature);

}
//--------------------UNIT 7-----------------------------


const validateForm = () => {

  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.hometown.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}
//Add animations
let scaleFactor = 1;
let modalImage = document.getElementById("happyearth");
function scaleImage() {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}

function toggleModal(person) {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you for signing, ${person.name}!`;

  let intervalId = setInterval(scaleImage, 500);
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

//UNIT 9 STRETCH GOAL:
const closeButton = document.querySelector("#close");
function closeModal(modal) {
  modal.style.display = "none";
}

// TODO: Call addSignature() and clear fields if no errors

//signNowButton.addEventListener('click', validateForm);
signNowButton.addEventListener('click', () => {
  validateForm();
})
closeButton.addEventListener('click', closeModal);


// Define animation object
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

//Create a new variable revealableContainers and use document.querySelectorAll to select every element with the class revealable.
let revealableContainers = document.querySelectorAll(".revealable")
//console.log(revealableContainers)
//Create reveal function
function reveal() {
  console.log("reveal")
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal)
