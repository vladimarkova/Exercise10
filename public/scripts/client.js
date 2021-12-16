(() => {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');

    const root = document.getElementById('root');
    const registerFormTemplate = document.getElementById('register-form-template');
    const loginFormTemplate = document.getElementById('login-form-template');
    const aboutTemplate = document.getElementById('about-template');
    const test = document.getElementById('test');

    registerLink.addEventListener('click', () => {
        root.firstElementChild?.remove();
        const { content } = registerFormTemplate.cloneNode(true);
        root.appendChild(content);
        // console.log(root.firstElementChild);
    })

    loginLink.addEventListener('click', () => {
        // console.log(registerFormTemplate);
        // root.firstElementChild?.remove();
        root.firstElementChild?.remove();
        const { content } = loginFormTemplate.cloneNode(true);
        root.appendChild(content);
        // console.log(root.firstElementChild);
    })

    aboutLink.addEventListener('click', () => {
        root.firstElementChild?.remove();
        const { content } = aboutTemplate.cloneNode(true);
        root.appendChild(content);
    })

})();