(() => {
    fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then((users) => {
            const usersTable = document.getElementById('users-table');
            users.map(user => {
                const userTableRow = document.createElement('tr');
                const userTableData = document.createElement('td');
                userTableData.innerHTML = user.username;
                userTableRow.appendChild(userTableData);

                const userRoleData = document.createElement('td');
                userRoleData.innerHTML = 'Admin';
                userTableRow.appendChild(userRoleData);

                usersTable.appendChild(userTableRow);
            })
        })
        .catch(err => console.error(err))
})();