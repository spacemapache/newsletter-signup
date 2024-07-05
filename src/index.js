// alert when subscribe btn is hit
// data validation for email

function subscribeBtn() {
  event.preventDefault();
  let email = document.getElementById("emailInput").value;

  if (email === "" || !email.includes("@")) {
    alert("Please fill in your email");
    return false;
  } else {
    alert("You're now subscribed!");
  }
}
