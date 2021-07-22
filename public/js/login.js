const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupButtonHandler = (event) => {
  document.location.replace("/signup");
};

document
  .querySelector(".signup-button")
  .addEventListener("click", signupButtonHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
