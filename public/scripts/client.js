(() => {
    const root = document.getElementById('root');
    const registerFormTemplate = document.getElementById('register-form-template');
    const loginFormTemplate = document.getElementById('login-form-template');

    console.log(root.firstElementChild);

    root.firstElementChild?.remove();
    const { content } = registerFormTemplate.cloneNode(true);
    root.appendChild(content);
})();