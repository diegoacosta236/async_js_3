// using an API, which in this case is an Alarm API

// Get references to HTML elements with specific IDs and store them in variables.
const name = document.querySelector("#name");      // Input field for the name
const delay = document.querySelector("#delay");    // Input field for the delay
const button = document.querySelector("#set-alarm"); // Button to set the alarm
const output = document.querySelector("#output");   // Output area to display alarm message

// Define a function named alarm that returns a Promise.
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    // Check if the provided delay is negative. If so, reject the Promise with an error.
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    
    // After the specified delay, resolve the Promise with a message to wake up the person.
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

// Add a click event listener to the "Set Alarm" button.
button.addEventListener("click", () => {
  // Call the alarm function with the provided name and delay, and handle the Promise.
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message)) // Display the wake-up message.
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`)); // Handle errors, if any.
});

// Implementing async and await
// Get references to HTML elements with specific IDs and store them in variables.
const name2 = document.querySelector("#name");      // Input field for the name
const delay2 = document.querySelector("#delay");    // Input field for the delay
const button2 = document.querySelector("#set-alarm"); // Button to set the alarm
const output2 = document.querySelector("#output");   // Output area to display the alarm message

// Define a function named alarm that returns a Promise.
function alarm(person, delay2) {
  return new Promise((resolve, reject) => {
    // Check if the provided delay is negative. If so, reject the Promise with an error.
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    
    // After the specified delay, resolve the Promise with a message to wake up the person.
    setTimeout(() => {
      resolve(`Wake up, ${person2}!`);
    }, delay2);
  });
}

// Add a click event listener to the "Set Alarm" button, using async/await for handling Promises.
button2.addEventListener("click", async () => {
  try {
    // Call the alarm function with the provided name and delay, and await the result.
    const message = await alarm(name2.value, delay2.value);
    
    // Update the output area with the wake-up message.
    output2.textContent = message;
  } catch (error) {
    // Handle errors if the Promise is rejected and update the output area accordingly.
    output2.textContent = `Couldn't set alarm: ${error}`;
  }
});
