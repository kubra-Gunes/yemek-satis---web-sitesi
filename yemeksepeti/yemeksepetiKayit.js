// İlçe verileri
const districts = {
    istanbul: ['Kadıköy', 'Beşiktaş', 'Üsküdar', 'Şişli', 'Bakırköy', 'Beyoğlu'],
    ankara: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut'],
    izmir: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli'],
    bursa: ['Nilüfer', 'Osmangazi', 'Yıldırım', 'Mudanya'],
    antalya: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Lara'],
    erzincan: ['Merkez', 'Üzümlü', 'Tercan', 'Çayırlı', 'İliç', 'Kemah', 'Kemaliye', 'Refahiye', 'Otlukbeli']
};

// Mahalle verileri (örnek)
const neighborhoods = {
    'Kadıköy': ['Caferağa', 'Fenerbahçe', 'Göztepe', 'Moda', 'Suadiye'],
    'Beşiktaş': ['Levent', 'Etiler', 'Arnavutköy', 'Bebek'],
    'Merkez': ['13 Şubat', 'Akşemsettin', 'Akyazı', 'Atatürk', 'Bahçelievler', 'Barbaros', 'Başbağlar', 'Cumhuriyet', 'Çarşı', 'Demirkent', 'Ergenekon', 'Fatih', 'Gülabibey', 'İnönü', 'Karaağaç', 'Mengüceli', 'Mimar Sinan', 'Yavuz Selim', 'Yeni Mahalle', 'Yıldırım Beyazıt']
    // Diğer ilçeler için mahalleler eklenebilir
};

// İlçeleri güncelle
function updateDistricts() {
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const selectedCity = citySelect.value;

    // İlçe seçimini sıfırla
    districtSelect.innerHTML = '<option value="">İlçe Seçiniz</option>';
    
    if (selectedCity && districts[selectedCity]) {
        districts[selectedCity].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }

    // Mahalle seçimini sıfırla
    document.getElementById('neighborhood').innerHTML = '<option value="">Önce İlçe Seçiniz</option>';
}

// Mahalleleri güncelle
function updateNeighborhoods() {
    const districtSelect = document.getElementById('district');
    const neighborhoodSelect = document.getElementById('neighborhood');
    const selectedDistrict = districtSelect.value;

    // Mahalle seçimini sıfırla
    neighborhoodSelect.innerHTML = '<option value="">Mahalle Seçiniz</option>';
    
    if (selectedDistrict && neighborhoods[selectedDistrict]) {
        neighborhoods[selectedDistrict].forEach(neighborhood => {
            const option = document.createElement('option');
            option.value = neighborhood;
            option.textContent = neighborhood;
            neighborhoodSelect.appendChild(option);
        });
    }
}

// Event Listeners
document.getElementById('city').addEventListener('change', updateDistricts);
document.getElementById('district').addEventListener('change', updateNeighborhoods);

// Form gönderimi
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const street = document.getElementById('street').value;
    const buildingNo = document.getElementById('buildingNo').value;
    const floor = document.getElementById('floor').value;
    const apartmentNo = document.getElementById('apartmentNo').value;
    const addressTitle = document.getElementById('addressTitle').value;
    const addressNote = document.getElementById('addressNote').value;
    const gender = document.getElementById('gender').value;

    // Adres oluştur
    const address = {
        title: addressTitle,
        city: city,
        district: district,
        neighborhood: neighborhood,
        street: street,
        buildingNo: buildingNo,
        floor: floor,
        apartmentNo: apartmentNo,
        note: addressNote
    };

    // Mevcut kullanıcıları al
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kullanıcı adının daha önce kullanılıp kullanılmadığını kontrol et
    if (users.some(user => user.username === username)) {
        alert('Bu kullanıcı adı zaten kullanılıyor!');
        return;
    }

    // Yeni kullanıcıyı oluştur
    const newUser = {
        username,
        password,
        age,
        gender,
        addresses: [address],
        cart: [],
        favorites: []
    };

    // Kullanıcıyı listeye ekle
    users.push(newUser);

    // Kullanıcıları localStorage'a kaydet
    localStorage.setItem('users', JSON.stringify(users));

    // Başarılı kayıt mesajı göster
    alert('Kayıt başarıyla tamamlandı!');

    // Giriş sayfasına yönlendir
    window.location.href = 'yemeksepetiGiriş.html';
}); 