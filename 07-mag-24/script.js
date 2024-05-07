function addName() {
    let name = document.getElementById('nameInput').value;
    if (name) {
        let p = document.createElement('p');
        p.textContent = name;
        document.getElementById('namesList').appendChild(p);
        saveNamesToStorage(name);
        document.getElementById('nameInput').value = '';
    } else {
        alert('Per favore inserisci un nome valido.');
    }
}

function saveNamesToStorage(name) {
    let existingNames = JSON.parse(localStorage.getItem('userNames')) || [];
    existingNames.push(name);
    localStorage.setItem('userNames', JSON.stringify(existingNames));
}

function removeAllNames() {
    localStorage.removeItem('userNames');
    let namesList = document.getElementById('namesList');
    namesList.innerHTML = ''; // Rimuove tutti gli elementi <p>
}

document.addEventListener('DOMContentLoaded', function() {
    let savedNames = JSON.parse(localStorage.getItem('userNames')) || [];
    savedNames.forEach(name => {
        let p = document.createElement('p');
        p.textContent = name;
        document.getElementById('namesList').appendChild(p);
    });
});

let timePassed = parseInt(sessionStorage.getItem('timePassed')) || 0;

        function updateTime() {
            document.getElementById('timeCounter').textContent = timePassed;
            timePassed++;
            sessionStorage.setItem('timePassed', timePassed);
        }
        setInterval(updateTime, 1000);