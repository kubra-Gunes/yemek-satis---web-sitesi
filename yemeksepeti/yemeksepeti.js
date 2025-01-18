
// Ürün verisi
const products = {
    durum: [
        { name: "Domix Tavuk Dürüm", image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/08/tavuk-durum-son-yemekcom.jpg", price: 110 },
        { name: "Dürümzane Tavuk Dürüm", image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/08/tavuk-durum-son-yemekcom.jpg", price: 100 },
        { name: "Maydonoz Döner Tavuk Dürüm", image: "https://www.hotelrestaurantmagazine.com/wp-content/uploads/2024/01/tavuk-durum-scaled.jpg", price: 120 },
        { name: "Öncü Tavuk Dürüm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxsjdgttU4jsJse9Gouwc1zgfvVa15Qgguw&s", price: 95 },
        { name: "Domix Et Dürüm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TOaIGI8jIwiECaJzx6V36vHTr05zjeLKzA&s", price: 170 },
        { name: "Dürümzane Et Dürüm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PdyQrrU3tejTTGoScS3UFofUE9sbDqI2NA&s", price: 160 },
        { name: "Maydonoz Döner Et Dürüm", image: "https://www.diyetkolik.com/site_media/media/foodrecipe_images/et-doner-durum.png", price: 180 },
        { name: "Öncü Et Dürüm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8xkmPxytsNhjvqm2wD-1s1EzVvouh2YZU-h4QL3kgngTPYsoF6kVDIOqib6V98Uek5s&usqp=CAU", price: 175 }
    ],
    hamburger: [
        { name: "Hamburger 1", image: "https://www.burgerking.com.tr/cmsfiles/products/kofteburger.webp?v=553", price: 120 },
        { name: "Hamburger 2", image: "https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg", price: 170 },
        { name: "Hamburger 3", image: "https://www.burgerking.com.tr/cmsfiles/products/hamburger-menu.webp?v=553", price: 220 },
        { name: "Hamburger 4", image: "https://www.rotiserie.safir.ro/uploads/produse/rotiserie-safir-meniu-hamburger-rasfat-nepicant-6413.jpg", price: 180 },
        { name: "Hamburger 5", image: "https://www.macfit.com/wp-content/uploads/2024/04/hamburger-kac-kalori.jpg", price: 150 },
        { name: "Hamburger 6", image: "https://www.unileverfoodsolutions.com.tr/konsept-uygulamalarimiz/sokak-lezzetleri/hamburger-malzemesi-secerken/jcr:content/parsys/content/textimage_copy_copy_628821058/image.transform/jpeg-optimized/image.1552661787858.jpg", price: 185 },
        { name: "Hamburger 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4zC3xlOY1ruUuLycLbSgG3KrLd1efqz8TQxg27Gm2c5s3N-uFkRKwb39860gM81oDAU&usqp=CAU", price: 165 },
        { name: "Hamburger 8", image: "https://cdn-fastly.foodtalkdaily.com/media/2022/07/05/6770947/post.jpg?size=720x845&nocrop=1", price: 170 }
    ],
    pizza: [
        { name: "Pizza 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pIPrHJepjYMh9E2vRHVc2rlSp2wHDIvymg&s", price: 185 },
        { name: "Pizza 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCSkvqCs8mtwV3Whghn_LsHG6B-z6SIo4OxL6LY9gcjbdflHn4yv0PX90YSMXuwWMMEA&usqp=CAU", price: 195 },
        { name: "Pizza 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4Ar6SMSgM0XIILPsbhc9rSj_CpxbYjFQlv2ZHyYEzcAl07bHVvCZPqenCz_GQ6-yizg&usqp=CAU", price: 200 },
        { name: "Pizza 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4VKOPHC1Ntf7SqTs4h5vL_gVZfl0Q-Zi1_ZC53ipth9FcfkVJdjPsVk6vSKr1qfhwxU&usqp=CAU", price: 215 },
        { name: "Pizza 5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkO0pWuqtXoqZ79Qg-jLac71RIjP3QBOAOQ&s", price: 180 },
        { name: "Pizza 6", image: "https://sondakikahaberleri.news/wp-content/uploads/2021/09/pizza-hamuru-1.jpg", price: 170 },
        { name: "Pizza 7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_o7IBWGp8zbSUYaF9mSjsJuLY7U6kcwqhtxi0wN46a7B8XfZ375jSdbwovXOT1ZvLNQ&usqp=CAU", price: 165 },
        { name: "Pizza 8", image: "https://imgrosetta.mynet.com.tr/file/19135698/320x180.jpg?size=720x845&nocrop=1", price: 185 }
    ],
    evyemegi: [
        { name: "Sarma", image: "https://i.lezzet.com.tr/images-xxlarge/zeytinyagli-yaprak-sarma-281366-5282c119-d499-47d6-80f0-cbefbbcf3488", price: 80 },
        { name: "Tavuk Pilav", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2tDqtTy7LMEpFz_ewa8Jx5gJsUwCrfN1Ew&s", price: 70 },
        { name: "Kuru Fasulye Pilav", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5vs6-YhbuhhHNdbc0qz2LjDXADLRZ1uCKQ&s", price: 50 },
        { name: "Kavurma Pilav", image: "https://www.hayiryemegi.com/wp-content/uploads/2023/07/kavurma-pilav-tatli-menu-kapakli-tabldot.webp", price: 150 },
        { name: "Çorba", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnTOxwqDN5uWS5qABfmXOHE0WYqr6zlznRA&s", price: 60 },
        { name: "Mantı", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHDSGXdyMJ3XijOLKVepkilfZoTmsYcm3qg&s", price: 85 }
    ],
    lahmacunPide: [  // Lahmacun ve Pide Kategorisi
        { name: "Lahmacun", image: "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg", price: 120 },
        { name: "Kıymalı Pide", image: "https://images.deliveryhero.io/image/fd-tr/LH/y984-listing.jpg", price: 140 },
        { name: "Sucuklu Pide", image: "https://i.nefisyemektarifleri.com/2020/04/17/ev-yapimi-pide-13.jpg", price: 150 },
        { name: "Kaşarlı Pide", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZsAFxa3L3m3JisIBgsZ9tajPN5jLnUY7Zw&s", price: 140 }
    ],
    icecek:[
        {name:"Coco-Cola" ,image:"https://www.coca-cola.com/content/dam/onexp/tr/tr/coca-cola-single-page/tr_coca-cola_prod_coca-cola-orijinal-tat_750x750.jpg",price:30},
        {name:" Fanta", image:"https://www.coca-cola.com/content/dam/onexp/tr/tr/brands/fanta/tr_fanta_prod_fanta-portakal_750x750.jpg",price:30},
        {name:"Sprite", image:"https://bizsizeyeteriz.com/images/thumbs/0005673_sprite-gazoz-330-ml_700.webp",price:30},
        {name:"Ayran", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TCVVTebF_CviX3X3mMEg-1ForQXt55UtNQ&s",price:20}
    ]
};
// Ürünleri Görüntüle
function displayProducts(productList) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = productList.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Fiyat: ${product.price} TL</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Sepete Ekle</button>
            <button onclick="addToFavorites('${product.name}')">Favorilere Ekle</button>
        </div>
    `).join('');
}

// Tüm Ürünleri Yükle
function loadAllProducts() {
    const allProducts = Object.values(products).flat();
    displayProducts(allProducts);
}

// Kategoriye Göre Ürünleri Yükle
function loadCategory(category) {
    if (products[category]) {
        displayProducts(products[category]);
    } else {
        console.error(`Kategori bulunamadı: ${category}`);
    }
}

/**************************************************************************************************/
//HEADER ALANINDAKİ BUTONLARA FONKSİYONLARINI BAĞLIYORUM 
/**************************************************************************************************/

// Favoriler butonuna tıklandığında favoriler modalını aç
function viewFavorites() {
    openModal('favorites-modal');
}

// Sepet butonuna tıklandığında sepet modalını aç
function viewCart() {
    openModal('cart-modal');
}

// Kullanıcı profiline gitme
function viewProfile() {
    window.location.href = 'yemeksepetiGiriş.html';
}




/**************************************************************************************************/
//ARAMA İŞLEMİ 
/**************************************************************************************************/


// Ürün arama fonksiyonu
function searchProducts(query) {
    // Tüm kategorilerdeki ürünleri birleştir
    const allProducts = [
        ...products.durum,
        ...products.hamburger,
        ...products.pizza,
        ...products.evyemegi,
        ...products.lahmacunPide,
        ...products.icecek
    ];

    // Arama sorgusuna uyan ürünleri filtrele
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    // Arama sonuçlarını göstermek için HTML oluştur
    const searchResultsSection = document.getElementById("all-products");
    searchResultsSection.style.display = "grid"; // Bölmeyi göster
    searchResultsSection.innerHTML = filteredProducts.length
        ? filteredProducts.map(product => `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Fiyat: ${product.price} TL</p>
                <button onclick="addToCart('all', '${product.name}', ${product.price})">Sepete Ekle</button>
                <button onclick="addToFavorites('all', '${product.name}', ${product.price})">Favorilere Ekle</button>
            </div>
        `).join('')
        : `<p>Sonuç bulunamadı.</p>`; // Sonuç yoksa mesaj göster
}

// Arama kutusu ile enter tuşunu dinleme
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const query = event.target.value.trim().toLowerCase(); // Arama sorgusunu al
        searchProducts(query); // Ürün arama fonksiyonunu çağır
    }
});
function handleSearch() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const allProducts = Object.values(products).flat(); // Tüm ürünleri al
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchInput) // Arama ile eşleşen ürünleri filtrele
    );
    displayProducts(filteredProducts); // Eşleşen ürünleri görüntüle
}


/**************************************************************************************************/
//SEPET VE FAVORİ İŞLEMLERİ 
/**************************************************************************************************/


// Sepet ve Favoriler Verisi
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Sepete Ürün Ekle
function addToCart(name, price, image) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1, image });
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Sepeti localStorage'a kaydet
    updateCartModal();
    alert(`${name} sepete eklendi!`);
}
// Sepet içi işlemler (sil , + , -)
function updateCartModal() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = cart.map(item => `
        <li>
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
            ${item.name} - ${item.price} TL x ${item.quantity}
            <button onclick="removeFromCart('${item.name}')">Sil</button>
            <button onclick="updateQuantity('${item.name}', 1)">+</button>
            <button onclick="updateQuantity('${item.name}', -1)">-</button>
        </li>
    `).join('');
    
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').innerText = `Toplam: ${totalPrice} TL`;
}

// Miktar Güncelle
function updateQuantity(name, delta) {// delta basılan butona göre değer alan değişken (+1 veya  -1)
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta); // Miktar 1'in altına düşmesin
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Güncellenmiş sepeti localStorage'a kaydet
    updateCartModal();
}

// Sepeti Onayla Fonksiyonu
function confirmOrder() {
    if (cart.length === 0) {
        alert("Sepet boş. Lütfen ürün ekleyin!");
    } else {
        alert("Siparişiniz Alındı!");
        cart = []; // Sepeti temizle
        localStorage.setItem('cart', JSON.stringify(cart)); // Sepeti localStorage'a kaydet
        updateCartModal(); // Sepet modalını güncelle
    }
}
 
// Sepetten Ürün Sil
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart)); // Güncellenmiş sepeti localStorage'a kaydet
    updateCartModal();
}


// Favorilere Ürün Ekle
function addToFavorites(name, price, image) {
    if (!favorites.some(item => item.name === name)) {
        favorites.push({ name, price, image });
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Favorileri localStorage'a kaydet
    }
    updateFavoritesModal();
    alert(`${name} favorilere eklendi!`);
}



// Favoriler içi işlemler 
function updateFavoritesModal() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = favorites.map(item => `
        <li>
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
            ${item.name}
            <button onclick="removeFromFavorites('${item.name}')">Sil</button>
        </li>
    `).join('');
}


// Favorilerden Ürün Sil
function removeFromFavorites(name) {
    favorites = favorites.filter(item => item.name !== name);
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Güncellenmiş favorileri localStorage'a kaydet
    updateFavoritesModal();
}


// Modalı Kapat
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Modalı Aç
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}


// Sayfa yüklendiğinde sepet ve favorileri yükle
window.onload = function() {
    updateCartModal();
    updateFavoritesModal();
};

function displayProducts(productList) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = productList.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
            <p>Fiyat: ${product.price} TL</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Sepete Ekle</button>
            <button onclick="addToFavorites('${product.name}', ${product.price}, '${product.image}')">Favorilere Ekle</button>
        </div>
    `).join('');
}




/**************************************************************************************************/
//ADRES  İŞLEMİ 
/**************************************************************************************************/


// İlçe verileri
const districts = {
    istanbul: ['Kadıköy', 'Beşiktaş', 'Üsküdar', 'Şişli', 'Bakırköy', 'Beyoğlu'],
    ankara: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut'],
    izmir: ['Konak', 'Karşıyaka', 'Bornova', 'Buca', 'Çiğli'],
    bursa: ['Nilüfer', 'Osmangazi', 'Yıldırım', 'Mudanya'],
    antalya: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Lara'],
    erzincan: ['Merkez', 'Üzümlü', 'Tercan', 'Çayırlı', 'İliç', 'Kemah', 'Kemaliye', 'Refahiye', 'Otlukbeli']
};

// Mahalle verileri
const neighborhoods = {
    'Kadıköy': ['Caferağa', 'Fenerbahçe', 'Göztepe', 'Moda', 'Suadiye'],
    'Beşiktaş': ['Levent', 'Etiler', 'Arnavutköy', 'Bebek'],
    'Merkez': ['13 Şubat', 'Akşemsettin', 'Akyazı', 'Atatürk', 'Bahçelievler', 'Barbaros', 'Başbağlar', 'Cumhuriyet', 'Çarşı']
};

// İlçeleri güncelle
function updateDistricts() {
    const citySelect = document.getElementById('city');//Seçilen şehri alıyorum
    const districtSelect = document.getElementById('district');
    const selectedCity = citySelect.value;

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

// Adres Modalını Aç
function openAddressModal() {
    document.getElementById('address-modal').style.display = 'block';
    closeModal('cart-modal');
}

// Adres Modalını Kapat
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


function addAddress() {
    // Adres bilgilerini al
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const street = document.getElementById('street').value;
    const buildingNo = document.getElementById('buildingNo').value;
    const floor = document.getElementById('floor').value;
    const apartmentNo = document.getElementById('apartmentNo').value;
    const addressTitle = document.getElementById('addressTitle').value;
    const addressNote = document.getElementById('addressNote').value;

    // Tüm alanların dolu olup olmadığını kontrol et
    if (!city || !district || !neighborhood || !street || !buildingNo || !floor || !apartmentNo || !addressTitle) {
        alert("Lütfen tüm alanları doldurun!");
        return; // Alanlar eksikse adres ekleme işlemini durdur
    }

    // Adres objesi oluştur
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

    // Adres başarıyla eklendi mesajını göster
    alert("Adres başarıyla eklendi!");

    // Modalı kapat
    setTimeout(() => {
        closeModal('address-modal');
    }, 2000); // 2 saniye sonra modal kapanacak
}

// Event Listeners
document.getElementById('city').addEventListener('change', updateDistricts);
document.getElementById('district').addEventListener('change', updateNeighborhoods);
