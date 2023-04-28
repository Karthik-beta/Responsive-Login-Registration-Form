// Get references to various HTML elements using querySelector and querySelectorAll.
// These elements include the switch container, the two switch buttons, the switch circles,
// the two form containers, and all submit buttons on the page.
let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

/**
 * This function is responsible for changing the appearance and behavior of the form
 * when one of the switch buttons is clicked.
 *
 * It accomplishes this by:
 * - adding the "is-gx" class to the switch container, triggering a transition effect
 * - after a delay of 1500ms, removing the "is-gx" class to allow for another transition
 * - toggling the "is-txr" class on the switch container and the two switch circles, moving them
 *   to the right side of the form and changing their color
 * - toggling the "is-hidden" class on the two form containers, hiding or showing them
 *   depending on which one is currently visible
 * - toggling the "is-txl" class on the first form container and the "is-z200" class on the
 *   second form container, moving them to the left side of the form and bringing the second
 *   container to the front, respectively
 *
 * @param {Event} e - The event object that triggered the function call (not used in this function)
 */
let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

/**
 * Attaches event listeners to buttons and switch buttons in the document.
 * Specifically, it adds a click listener to each button in the `allButtons`
 * collection that calls the `getButtons` function when clicked, and a click
 * listener to each button in the `switchBtn` collection that calls the
 * `changeForm` function when clicked.
 *
 * @param {Event} e - The event object (not used in this function).
 */
let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}


window.addEventListener("load", mainF);