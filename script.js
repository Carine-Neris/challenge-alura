let friends = [];

function addFriend() {
    const friendName = document.getElementById('friendName').value.trim();
    if (friendName) {
        friends.push(friendName);
        updateFriendsList();
        document.getElementById('friendName').value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

function updateFriendsList() {
    const friendsList = document.getElementById('friendsList');
    friendsList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });
}

function drawFriend() {
    if (friends.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * friends.length);
    const winner = friends[randomIndex];
    document.getElementById('result').textContent = `O amigo sorteado é: ${winner}`;
}