// ==========================================
// PROFILÈ CLINICS
// LANGUAGE SYSTEM
// ==========================================


const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");



const translations = {


    ar: {

        heroTitle:
            "مركز التخسيس والعلاج الطبيعي",

        heroSubtitle:
            "كل ما تحتاجه قبل وبعد زيارتك.",


        contactTitle:
            "تواصل معنا",

        contactSubtitle:
            "نحن هنا لمساعدتك",


        whatsappTitle:
            "واتساب",

        whatsappSubtitle:
            "تحدث مع فريقنا",


        hotlineTitle:
            "اتصل بنا",

        hotlineSubtitle:
            "01070162770",


        numbersTitle:
            "أرقام التواصل",

        numbersSubtitle:
            "يمكنك التواصل معنا على أي من الأرقام التالية",


        socialTitle:
            "ابق على تواصل",

        socialSubtitle:
            "تابعنا على وسائل التواصل الاجتماعي",


        facebookText:
            "فيسبوك",

        instagramText:
            "إنستجرام",


        reviewsTitle:
            "آراء عملائنا",

        reviewsSubtitle:
            "ماذا يقول عملاؤنا عن تجربتهم؟",


        shareTitle:
            "شاركنا تجربتك",

        branchesTitle:
            "فروع القاهرة",


        branchOne:
            "Fifth Settlement - Sidewalk Mall",

        branchTwo:
            "Ozone Medical Mall – Al-Narges Buildings",


        urgentText:
            "للحجز والاستفسار، يرجى التواصل معنا على الرقم التالي:",

        visitText:
            "أو زيارة أقرب فرع من فروع PROFILÈ Clinic"

    },


    en: {

        heroTitle:
            "Weight Management & Physiotherapy Center",

        heroSubtitle:
            "Everything you need before and after your visit.",


        contactTitle:
            "Contact Us",

        contactSubtitle:
            "We are here to help you",


        whatsappTitle:
            "WhatsApp",

        whatsappSubtitle:
            "Chat with our team",


        hotlineTitle:
            "Call Us",

        hotlineSubtitle:
            "01070162770",


        numbersTitle:
            "Contact Numbers",

        numbersSubtitle:
            "You can reach us through any of the following numbers",


        socialTitle:
            "Stay Connected",

        socialSubtitle:
            "Follow us on social media",


        facebookText:
            "Facebook",

        instagramText:
            "Instagram",


        reviewsTitle:
            "Our Clients' Reviews",

        reviewsSubtitle:
            "What do our clients say about their experience?",


        shareTitle:
            "Share Your Experience",

        branchesTitle:
            "Cairo Branches",


        branchOne:
            "Fifth Settlement - Sidewalk Mall",

        branchTwo:
            "Ozone Medical Mall – Al-Narges Buildings",


        urgentText:
            "For reservations and inquiries, please contact us at:",

        visitText:
            "or visit the nearest PROFILÈ Clinic"

    }

};



// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(language) {


    document.documentElement.lang = language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";



    // BUTTONS

    if (language === "ar") {

        arBtn.classList.add("active");

        enBtn.classList.remove("active");

    } else {

        enBtn.classList.add("active");

        arBtn.classList.remove("active");

    }



    // TEXT

    const current =
        translations[language];


    Object.keys(current).forEach(function(key) {


        const element =
            document.getElementById(key);


        if (element) {

            element.textContent =
                current[key];

        }

    });



    // READ MORE BUTTONS

    document.querySelectorAll(".readMore")
        .forEach(function(button) {

            button.textContent =
                language === "ar"
                    ? button.dataset.ar
                    : button.dataset.en;

        });



    // SAVE LANGUAGE

    localStorage.setItem(
        "profilLanguage",
        language
    );

}



// ==========================================
// LANGUAGE BUTTONS
// ==========================================

enBtn.addEventListener(
    "click",
    function() {

        changeLanguage("en");

    }
);


arBtn.addEventListener(
    "click",
    function() {

        changeLanguage("ar");

    }
);



// ==========================================
// LOAD SAVED LANGUAGE
// ==========================================

const savedLanguage =
    localStorage.getItem("profilLanguage");


if (savedLanguage === "en") {

    changeLanguage("en");

} else {

    changeLanguage("ar");

}



// ==========================================
// READ MORE
// ==========================================

document.querySelectorAll(".readMore")
    .forEach(function(button) {


        button.addEventListener(
            "click",
            function() {


                const card =
                    button.closest(".review-card");


                card.classList.toggle(
                    "expanded"
                );


                const language =
                    document.documentElement.lang;


                if (
                    card.classList.contains(
                        "expanded"
                    )
                ) {

                    button.textContent =
                        language === "ar"
                            ? "إخفاء"
                            : "Hide";

                } else {

                    button.textContent =
                        language === "ar"
                            ? "اقرأ المزيد"
                            : "Read More";

                }

            }

        );

    });