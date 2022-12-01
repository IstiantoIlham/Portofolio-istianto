let items = [
    {
        "title": "Arkan App",
        "desc": "Kotlin - IT Project",
        "img": "./assets/images/projects/arkan.png",
        "link": "https://tinyurl.com/2kj7aryz",
    }, {
        "title": "Kisah 25 Nabi Muslim",
        "desc": "Kotlin - IT Project",
        "img": "./assets/images/projects/kisah.png",
        "link": "https://tinyurl.com/2p3y3cus",
    }, {
        "title": "Le-Vaccine",
        "desc": "Kotlin - IT Project",
        "img": "./assets/images/projects/le-Vaccine.png",
        "link": "https://github.com/yahdee2702/LeVaccine"
    }, {
        "title": "BukuKu",
        "desc": "HTML - Dicoding Submision",
        "img": "./assets/images/projects/Bukuku.png",
        "link": "https://github.com/IstiantoIlham/Bukuku"
    },

    {
        "title": "Warung Padang",
        "desc": "HTML - Dicoding Submision",
        "img": "./assets/images/projects/warung-Padang.png",
        "link": "https://github.com/IstiantoIlham/Warung-Padang"
    },

    {
        "title": "Alarm App",
        "desc": "Kotlin - It Project",
        "img": "./assets/images/projects/alarm-App.png",
        "link": "https://github.com/IstiantoIlham/MyAlarmApp"
    },
];

let certificate = [
    {
        "title": "Dicoding Certificate",
        "desc": "Belajar Dasar Pemograman JavaScript",
        "img": "./assets/images/certificates/dasar-Js.jpg",
        "link": "https://tinyurl.com/2hmlo6cx"
    },

    {
        "title": "Dicoding Certificate",
        "desc": "Belajar Dasar Pemograman Web",
        "img": "./assets/images/certificates/dasar-Web.png",
        "link": "https://tinyurl.com/2fpy73jx"
    },

    {
        "title": "Dicoding Certificate",
        "desc": "Belajar Membuat Aplikasi Flutter Pemula",
        "img": "./assets/images/certificates/flutter-Pemula.png",
        "link": "https://www.dicoding.com/certificates/NVP7KYV0OZR0"
    },

    {
        "title": "Dicoding Certificate",
        "desc": "Belajar Membuat Front End Web Untuk Pemula",
        "img": "./assets/images/certificates/front-End-Web.png",
        "link": "https://www.dicoding.com/certificates/JLX1L09MNX72"
    },

    {
        "title": "Dicoding Certificate",
        "desc": "Belajar Membuat Aplikasi Android Pemula",
        "img": "./assets/images/certificates/membuat-Aplikasi-Pemula.png",
        "link": "https://www.dicoding.com/certificates/JMZVG8GVRZN9"
    },

    {
        "title": "Dicoding Certificate",
        "desc": "Memulai Pemograman Dengan Kotlin",
        "img": "./assets/images/certificates/memulai-Kotlin.png",
        "link": "https://www.dicoding.com/certificates/N9ZO7L288ZG5"
    },
]

function createItem(item) {
    const card = document.createElement('div');
    card.className = "card";
    card.setAttribute('onclick', `window.open('${item['link']}')`)

    const img = document.createElement('img');
    img.src = item["img"];

    const container = document.createElement('div');
    container.className = "container";

    const h3 = document.createElement('h3');
    h3.className = "project-Title"
    h3.innerText = item["title"];

    const p = document.createElement('p');
    p.innerText = item["desc"];

    container.append(h3, p)
    card.append(img, container);

    return card;
}

function createList(sectionId, items) {
    for (const item of items) {
        document.getElementById(sectionId).append(createItem(item));
    }
}

createList("this-Projects", items);
createList("this-Certificate", certificate)