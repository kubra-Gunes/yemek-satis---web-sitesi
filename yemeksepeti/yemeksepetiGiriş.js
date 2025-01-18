// Mevcut kullanıcıları al
const users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'elif', password: '1234', addresses: ['Adres 1'], cart: [], favorites: [] },
    { username: 'kerim', password: '1234', addresses: ['Adres 2'], cart: [], favorites: [] },
    { username: 'kübra', password: '1234', addresses: ['Adres 3'], cart: [], favorites: [] }
];

// Kullanıcı kaydet
function registerUser(username, password, address) {
    users.push({ username, password, addresses: [address], cart: [], favorites: [] });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Kayıt başarılı!');
}

// Giriş kontrolü
// Giriş yapıldığında kullanıcıyı sakla
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Giriş başarılıysa kullanıcıyı localStorage'a kaydedin
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Giriş başarılı!');
        window.location.href = 'yemeksepeti.html'; // Anasayfaya yönlendirme
    } else {
        alert('Kullanıcı adı veya şifre hatalı.');
    }
}

// Çıkış
function logout() {
    localStorage.removeItem('currentUser'); // Oturumu sil
    window.location.href = 'yemeksepetiGiriş.html'; // Giriş sayfasına yönlendirme
}


function saveUserData() {
    if (currentUser) {
        currentUser.cart = cart;
        currentUser.favorites = favorites;
        localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Güncellenmiş kullanıcıyı kaydet
    }
}


window.onload = function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Sayfanın yenilenmesini engeller

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        login(username, password); // Giriş kontrolü fonksiyonunu çağır
    });

    const registerLink = document.getElementById('registerLink');
    registerLink.addEventListener('click', function (e) {
        e.preventDefault(); // Varsayılan tıklama davranışını engelle
        const username = prompt('Kullanıcı adınızı girin:');
        const password = prompt('Şifrenizi girin:');
        const address = prompt('Adresinizi girin:');

        if (username && password && address) {
            registerUser(username, password, address); // Kullanıcı kaydet
        } else {
            alert('Tüm alanları doldurun.');
        }
    });
};
