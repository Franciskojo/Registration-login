
//Get form element by id
const registerForm = document.querySelector("#login");
// Handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect form data
  const formData = new FormData(registerForm);
  //   Send data to backend
  // Display success message to user
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Account registered successfully";
});

// Declare varaible age
const age = 71;
console.log(age);

// Define squareAge function
function squareAge(age) {
  return age ** 2;
}

const squaredAge = squareAge(54);
console.log(squaredAge);
//   Write fullname function
function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myName = fullName("Francis", 'Amekeh');
console.log(myName);

