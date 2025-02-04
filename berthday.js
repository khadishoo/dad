document.getElementById("wishButton").addEventListener("click", function() {
    const wishes = [
        "Әке, сізге мол бақыт пен зор денсаулық тілеймін!",
        "Тілеген армандарыңыз орындалсын!",
        "Күніңіз жарқын, өміріңіз шаттыққа толы болсын!",
        "Әрдайым күлімсіреп, бақытты болыңыз!",
        "Жаныңыз тыныш, жүрегіңіз шаттыққа толы болсын!",
        "Әрбір күніңіз қуаныш пен шаттыққа толы өтсін!",
        "Отбасыңыз аман, жолыңыз әрқашан ашық болсын!",
        "Әрбір арманыңыз орындалсын, әрбір күні берекелі болсын!",
        "Сізге ұзақ өмір, сәттілік және мол табыс тілеймін!",
        "Қуаныш пен махаббат сіздің өміріңіздің ажырамас бөлігі болсын!",
        "Сізге мықты денсаулық, бақыт және тыныштық тілеймін!",
        "Жүрегіңіз жылы сезімдерге толы болсын!",
        "Әрбір күніңіз сәттілік пен жақсылық әкелсін!",
        "Көңіліңіз көтеріңкі, жаныңыз тыныш болсын!",
        "Мен сізді жақсы көремін!"
    ];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wishText").innerText = randomWish;
});

const images = ["папа.jpg", "папа1.jpg", "папа2.jpg", "папа3.jpg","папа4.jpg","папа5.jpg","папа6.jpg","папа7.jpg","папа8.jpg","папа9.jpg","папа10.jpg","папа11.jpg","папа12.jpg","папа13.jpg","папа14.jpg","папа15.jpg","папа16.jpg","папа17.jpg","папа18.jpg"];
        let currentIndex = 0;
        const galleryImage = document.getElementById("galleryImage");

        document.getElementById("nextButton").addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        });

        document.getElementById("prevButton").addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            galleryImage.src = images[currentIndex];
        });