(() => {
    const URL = 'http://localhost:3000';

    // const registerBtn = document.querySelector('#register-btn');
    const registerForm = document.querySelector('#register-form');
    const responseElement = document.querySelector('#response');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.querySelector('#reg-username');
        const psw = document.querySelector('#reg-psw');
        const user = {
            username: username.value,
            psw: psw.value
        };

        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
                username.value = '';
                psw.value = '';
                responseElement.innerHTML = data.message;
                responseElement.setAttribute('class', 'show-response');
            })
            .catch(err => console.error(err))
    })
})();