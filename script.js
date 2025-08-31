document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const statusScreen = document.getElementById('status-screen');
    const nameInput = document.getElementById('name-input');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const memberList = document.getElementById('member-list');
    const logoutButton = document.getElementById('logout-button');

    // Define the members and their initial statuses
    const members = {
        "Arthur": "random",
        "Celso": "random",
        "Jonatas": "random",
        "Geagas": "random",
        "Neris": "random",
        "Português": "random",
        "Vinicius": "random",
        "Carlos": "random"
    };

    // User and admin passwords
    const userPassword = "user";
    const adminPassword = "ivnebJDQR3R8230RI-30FCNC";

    // This function builds the list of members and their statuses
    function renderMembers(isAdmin) {
        memberList.innerHTML = ''; // Clear the list first
        for (const name in members) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${name}:</span> <span class="status">${members[name]}</span>`;
            
            // If the user is an admin, add a button to change the status
            if (isAdmin) {
                const button = document.createElement('button');
                button.textContent = 'Change Status';
                button.addEventListener('click', () => {
                    const currentStatus = members[name];
                    let newStatus;
                    if (currentStatus === "random") {
                        newStatus = "na linha";
                    } else if (currentStatus === "na linha") {
                        newStatus = "zanguer";
                    } else {
                        newStatus = "random";
                    }
                    members[name] = newStatus;
                    renderMembers(isAdmin); // Re-render the list with the new status
                });
                li.appendChild(button);
            }
            memberList.appendChild(li);
        }
    }

    loginButton.addEventListener('click', () => {
        const password = passwordInput.value;
        const name = nameInput.value;
        let isAdmin = false;

        if (password === adminPassword) {
            isAdmin = true;
            alert(`Welcome, Admin ${name}!`);
        } else if (password === userPassword) {
            alert(`Welcome, User ${name}!`);
        } else {
            alert("Incorrect password.");
            return;
        }

        loginScreen.style.display = 'none';
        statusScreen.style.display = 'block';
        renderMembers(isAdmin);
    });

    logoutButton.addEventListener('click', () => {
        loginScreen.style.display = 'block';
        statusScreen.style.display = 'none';
        nameInput.value = '';
        passwordInput.value = '';
    });
});
