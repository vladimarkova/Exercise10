(() => {
  const loginForm = document.querySelector("#login-form");
  const responseElement = document.querySelector("#response");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector("#log-username");
    const psw = document.querySelector("#log-psw");
    const user = {
      username: username.value,
      psw: psw.value,
    };

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        username.value = "";
        psw.value = "";
        responseElement.innerHTML = data.message;
        responseElement.setAttribute("class", "show-response");
      })
      .catch((err) => console.error(err));
  });
})();
