(() => {
    const registerBtn = document.querySelector('#register-btn');
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(users => console.log(users))
            .catch(err => console.error(err))
    })
})();