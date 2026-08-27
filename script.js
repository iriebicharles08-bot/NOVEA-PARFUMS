/* =====================================================
   NØVÉA — INTERACTIONS
===================================================== */


/* =====================================================
   INTRO
===================================================== */

const opening = document.getElementById("opening");
const enterSite = document.querySelector(".enter-novea");

const words = document.querySelectorAll(".word");
const openingBrand = document.querySelector(".opening-brand");

let currentWord = 0;


/* changement des trois phrases */

function changeOpeningWord() {

    const current = words[currentWord];

    current.classList.remove("active");
    current.classList.add("exit");

    currentWord++;

    if (currentWord >= words.length) {

        /*
            Après la troisième phrase,
            on révèle NØVÉA.
        */

        setTimeout(() => {

            document
                .querySelector(".opening-content")
                .style.opacity = "0";

            openingBrand.classList.add("show");

        }, 900);

        return;
    }


    const next = words[currentWord];

    next.classList.remove("exit");

    setTimeout(() => {

        next.classList.add("active");

    }, 300);
}


/*
    Chaque phrase reste suffisamment
    longtemps à l'écran.
*/

setTimeout(() => {

    changeOpeningWord();

}, 2300);


setTimeout(() => {

    if (currentWord === 1) {
        changeOpeningWord();
    }

}, 4700);


setTimeout(() => {

    if (currentWord === 2) {
        changeOpeningWord();
    }

}, 7000);


/* entrée dans le site */

/* =====================================================
   ENTRÉE DANS NØVÉA
===================================================== */

if (enterSite) {

    enterSite.addEventListener("click", () => {

        /* Toujours commencer au sommet du site */
        window.scrollTo(0, 0);

        /* Fermer l'introduction */
        opening.classList.add("hide");

        document.body.style.overflow = "";


        /* Bulle WhatsApp */

        const whatsappBubble =
            document.querySelector(".novea-whatsapp");

        if (whatsappBubble) {

            setTimeout(() => {

                whatsappBubble.classList.add("is-visible");

            }, 900);

        }


        /* Fin de l'Intro */

        setTimeout(() => {

    opening.style.display = "none";

    /* Petit temps de respiration avant le logo */
    setTimeout(() => {

        playHeroNoveaReveal();

    }, 250);

}, 1400);

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   DÉCALAGE DES CARTES
===================================================== */

const grids =
    document.querySelectorAll(".perfume-grid");


grids.forEach((grid) => {

    const cards =
        grid.querySelectorAll(".perfume");

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });

});


/* =====================================================
   TEST OLFACTIF — NØVÉA
===================================================== */
/* =====================================================
   TEST OLFACTIF — ÉLÉMENTS HTML
===================================================== */

const startTest =
    document.getElementById("startTest");

const restartTest =
    document.getElementById("restartTest");

const testIntro =
    document.getElementById("testIntro");

const quiz =
    document.getElementById("quiz");

const quizResult =
    document.getElementById("quizResult");

const questionNumber =
    document.getElementById("questionNumber");

const questionLabel =
    document.getElementById("questionLabel");

const questionTitle =
    document.getElementById("questionTitle");

const answersContainer =
    document.getElementById("answers");

const answerMessage =
    document.getElementById("answerMessage");

const progressBar =
    document.getElementById("progressBar");

const resultNumber =
    document.getElementById("resultNumber");

const resultName =
    document.getElementById("resultName");

const resultDescription =
    document.getElementById("resultDescription");

const resultImage =
    document.getElementById("resultImage");

const resultNotes =
    document.getElementById("resultNotes");

/* =====================================================
   QUESTIONS — EXPÉRIENCE OLFACTIVE NØVÉA
===================================================== */

const questions = [

    {
        label: "VOTRE INTENTION",

        title:
            "Pour qui choisissez-vous ce parfum ?",

        answers: [

            {
                text: "Pour moi.",
                detail: "Une signature qui raconte quelque chose de vous.",
                scores: {
                    light: 1,
                    depth: 1,
                    warm: 1
                }
            },

            {
                text: "Pour lui.",
                detail: "Une présence élégante, affirmée et mémorable.",
                scores: {
                    light: 1,
                    depth: 2,
                    warm: 1
                }
            },

            {
                text: "Pour elle.",
                detail: "Une aura délicate, lumineuse et captivante.",
                scores: {
                    light: 2,
                    depth: 1,
                    warm: 1
                }
            },

            {
                text: "Pour quelqu'un de spécial.",
                detail: "Un parfum choisi pour laisser une émotion.",
                scores: {
                    light: 1,
                    depth: 1,
                    warm: 2
                }
            }

        ]
    },


    {
        label: "VOTRE PRÉSENCE",

        title:
            "Quelle impression cette personne laisse-t-elle naturellement ?",

        answers: [

            {
                text: "Une énergie lumineuse.",
                detail: "Une présence fraîche, spontanée et vivante.",
                scores: {
                    light: 3,
                    depth: 0,
                    warm: 0
                }
            },

            {
                text: "Une élégance mystérieuse.",
                detail: "Une présence discrète qui intrigue.",
                scores: {
                    light: 1,
                    depth: 3,
                    warm: 0
                }
            },

            {
                text: "Une chaleur rassurante.",
                detail: "Une présence douce qui donne envie de rester.",
                scores: {
                    light: 0,
                    depth: 1,
                    warm: 3
                }
            },

            {
                text: "Un mélange difficile à définir.",
                detail: "Une personnalité qui ne ressemble à aucune autre.",
                scores: {
                    light: 1,
                    depth: 2,
                    warm: 2
                }
            }

        ]
    },


    {
        label: "SON UNIVERS",

        title:
            "Quel décor lui correspond le mieux ?",

        answers: [

            {
                text: "Un jardin au petit matin.",
                detail: "Rosée, lumière douce et fraîcheur.",
                scores: {
                    light: 3,
                    depth: 0,
                    warm: 1
                }
            },

            {
                text: "Une galerie après la tombée de la nuit.",
                detail: "Silence, ombres et élégance.",
                scores: {
                    light: 0,
                    depth: 3,
                    warm: 1
                }
            },

            {
                text: "Un intérieur chaleureux à la lumière des bougies.",
                detail: "Bois, douceur et proximité.",
                scores: {
                    light: 0,
                    depth: 1,
                    warm: 3
                }
            },

            {
                text: "Une terrasse au coucher du soleil.",
                detail: "Une atmosphère entre lumière et chaleur.",
                scores: {
                    light: 2,
                    depth: 1,
                    warm: 2
                }
            }

        ]
    },


    {
        label: "SON CARACTÈRE",

        title:
            "Quelle qualité le/la définit le mieux ?",

        answers: [

            {
                text: "La spontanéité.",
                detail: "Une personnalité fraîche et imprévisible.",
                scores: {
                    light: 3,
                    depth: 0,
                    warm: 0
                }
            },

            {
                text: "Le mystère.",
                detail: "Une personnalité que l'on découvre avec le temps.",
                scores: {
                    light: 0,
                    depth: 3,
                    warm: 0
                }
            },

            {
                text: "La générosité.",
                detail: "Une chaleur qui se ressent immédiatement.",
                scores: {
                    light: 0,
                    depth: 1,
                    warm: 3
                }
            },

            {
                text: "Le charisme.",
                detail: "Une présence qui reste longtemps en mémoire.",
                scores: {
                    light: 1,
                    depth: 2,
                    warm: 2
                }
            }

        ]
    },


    {
        label: "LA SIGNATURE",

        title:
            "Quelle trace aimeriez-vous que le parfum laisse ?",

        answers: [

            {
                text: "Une sensation de fraîcheur.",
                detail: "Claire, légère et immédiatement séduisante.",
                scores: {
                    light: 3,
                    depth: 0,
                    warm: 0
                }
            },

            {
                text: "Une aura mystérieuse.",
                detail: "Subtile, profonde et intrigante.",
                scores: {
                    light: 0,
                    depth: 3,
                    warm: 0
                }
            },

            {
                text: "Une sensation enveloppante.",
                detail: "Douce, chaude et presque addictive.",
                scores: {
                    light: 0,
                    depth: 1,
                    warm: 3
                }
            },

            {
                text: "Une émotion inoubliable.",
                detail: "Une signature qui continue de vivre après le départ.",
                scores: {
                    light: 1,
                    depth: 2,
                    warm: 2
                }
            }

        ]
    }

];


/* =====================================================
   BANQUE DE PARFUMS — NØVÉA
===================================================== */

const perfumes = {

    light: [

        {
            number: "01",
            name: "MY WAY",
            gender: "female",
            description: "Une signature lumineuse, florale et élégante.",
            notes: "Fleurs blanches · Agrumes · Musc",
            image: "ASSETS/my-way.jpeg"
        },

        {
            number: "02",
            name: "SÌ",
            gender: "female",
            description: "Une élégance lumineuse, raffinée et intemporelle.",
            notes: "Cassis · Rose · Vanille",
            image: "ASSETS/si.jpeg"
        },

        {
            number: "03",
            name: "PRADA",
            gender: "unisex",
            description: "Une élégance propre, moderne et sophistiquée.",
            notes: "Iris · Ambre · Musc",
            image: "ASSETS/prada.jpeg"
        },

        {
            number: "04",
            name: "CALVIN KLEIN",
            gender: "unisex",
            description: "Une signature contemporaine, fraîche et équilibrée.",
            notes: "Notes fraîches · Bois · Musc",
            image: "ASSETS/calvin-klein.jpeg"
        },

        {
            number: "05",
            name: "SAUVAGE",
            gender: "male",
            description: "Une fraîcheur intense au caractère affirmé.",
            notes: "Bergamote · Poivre · Ambroxan",
            image: "ASSETS/sauvage.jpeg"
        },

        {
            number: "06",
            name: "COQUILLAGES",
            gender: "unisex",
            description: "Une sensation fraîche et lumineuse.",
            notes: "Notes fraîches · Musc · Bois",
            image: "ASSETS/coquillages.jpeg"
        },

        {
            number: "07",
            name: "VERSACE",
            gender: "unisex",
            description: "Une présence fraîche, élégante et expressive.",
            notes: "Agrumes · Fleurs · Bois",
            image: "ASSETS/versace.jpeg"
        }

    ],


    depth: [

        {
            number: "01",
            name: "BABYCAT",
            gender: "unisex",
            description: "Une signature sombre, chaude et mystérieuse.",
            notes: "Vanille · Daim · Bois",
            image: "ASSETS/babycat.jpeg"
        },

        {
            number: "02",
            name: "BOIS D'ARGENT",
            gender: "unisex",
            description: "Une élégance boisée, profonde et sophistiquée.",
            notes: "Iris · Encens · Bois",
            image: "ASSETS/bois-dargent.jpeg"
        },

        {
            number: "03",
            name: "OMBRE",
            gender: "male",
            description: "Une présence sombre, élégante et persistante.",
            notes: "Bois · Ambre · Musc",
            image: "ASSETS/ombre.jpeg"
        },

        {
            number: "04",
            name: "GENTLEMAN",
            gender: "male",
            description: "Une élégance masculine profonde et sophistiquée.",
            notes: "Iris · Poivre · Patchouli",
            image: "ASSETS/gentleman.jpeg"
        },

        {
            number: "05",
            name: "SUPREMACY",
            gender: "male",
            description: "Une présence affirmée, élégante et persistante.",
            notes: "Fruits · Bois · Ambre",
            image: "ASSETS/supremacy.jpeg"
        },

        {
            number: "06",
            name: "CLUB DE NUIT",
            gender: "unisex",
            description: "Une signature élégante, intense et sophistiquée.",
            notes: "Agrumes · Rose · Bois",
            image: "ASSETS/club-de-nuit.jpeg"
        },

        {
            number: "07",
            name: "CARTIER",
            gender: "unisex",
            description: "Une élégance raffinée et intemporelle.",
            notes: "Bois · Épices · Musc",
            image: "ASSETS/cartier.jpeg"
        },

        {
            number: "08",
            name: "TOM FORD",
            gender: "unisex",
            description: "Une signature sophistiquée, profonde et contemporaine.",
            notes: "Bois · Ambre · Épices",
            image: "ASSETS/tom-ford.jpeg"
        }

    ],


    warm: [

        {
            number: "01",
            name: "BLACK OPIUM",
            gender: "female",
            description: "Une signature chaude, sensuelle et addictive.",
            notes: "Café · Vanille · Fleurs blanches",
            image: "ASSETS/black-opium.jpeg"
        },

        {
            number: "02",
            name: "YARA 24K",
            gender: "female",
            description: "Une douceur gourmande, lumineuse et enveloppante.",
            notes: "Vanille · Ambre · Fruits",
            image: "ASSETS/yara-24k.jpeg"
        },

        {
            number: "03",
            name: "LIQUID BRUN",
            gender: "male",
            description: "Une signature chaude, boisée et gourmande.",
            notes: "Vanille · Épices · Bois",
            image: "ASSETS/liquid-brun.jpeg"
        },

        {
            number: "04",
            name: "BARAKKAT",
            gender: "unisex",
            description: "Une chaleur ambrée, douce et enveloppante.",
            notes: "Ambre · Musc · Bois",
            image: "ASSETS/barakkat.jpeg"
        },

        {
            number: "05",
            name: "SCANDAL",
            gender: "female",
            description: "Une signature gourmande, audacieuse et provocante.",
            notes: "Miel · Caramel · Patchouli",
            image: "ASSETS/scandal.jpeg"
        },

        {
            number: "06",
            name: "9PM",
            gender: "male",
            description: "Une empreinte douce, fruitée et nocturne.",
            notes: "Pomme · Vanille · Ambre",
            image: "ASSETS/9pm.jpeg"
        },

        {
            number: "07",
            name: "LE BEAU",
            gender: "male",
            description: "Une sensualité fraîche, solaire et boisée.",
            notes: "Coco · Tonka · Bois",
            image: "ASSETS/le-beau.jpeg"
        },

        {
            number: "08",
            name: "LA BELLE",
            gender: "female",
            description: "Une signature douce, chaude et séduisante.",
            notes: "Poire · Vanille · Tonka",
            image: "ASSETS/la-belle.jpeg"
        },

        {
            number: "09",
            name: "L'INTERDIT",
            gender: "female",
            description: "Une élégance florale au caractère plus sombre.",
            notes: "Fleur d'oranger · Tubéreuse · Patchouli",
            image: "ASSETS/linterdit.jpeg"
        },

        {
            number: "10",
            name: "SUCRE NOIR",
            gender: "unisex",
            description: "Une signature sombre, gourmande et enveloppante.",
            notes: "Vanille · Sucre · Bois",
            image: "ASSETS/sucre-noir.jpeg"
        },

        {
            number: "11",
            name: "TERRACOTTA",
            gender: "female",
            description: "Une présence solaire, douce et chaleureuse.",
            notes: "Fleurs · Vanille · Notes solaires",
            image: "ASSETS/terracotta.jpeg"
        },

        {
            number: "12",
            name: "BACCARAT ROUGE 540",
            gender: "unisex",
            description: "Une empreinte aérienne, ambrée et mémorable.",
            notes: "Safran · Ambre · Bois",
            image: "ASSETS/baccarat-rouge-540.jpeg"
        }

    ]

};


/* =====================================================
   ÉTAT DU TEST
===================================================== */

let currentQuestion = 0;

let scores = {
    light: 0,
    depth: 0,
    warm: 0
};

let audience = "unisex";


/* =====================================================
   DÉMARRER
===================================================== */

if (startTest) {

    startTest.addEventListener("click", () => {

        currentQuestion = 0;

        scores = {
            light: 0,
            depth: 0,
            warm: 0
        };

        audience = "unisex";

        testIntro.style.display = "none";

        quiz.classList.add("active");

        quizResult.classList.remove("active");

        showQuestion();

    });

}


/* =====================================================
   AFFICHER UNE QUESTION
===================================================== */

function showQuestion() {

    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        String(currentQuestion + 1)
            .padStart(2, "0");


    questionLabel.textContent =
        question.label;


    questionTitle.textContent =
        question.title;


    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    answersContainer.innerHTML = "";

    answerMessage.textContent = "";


    question.answers.forEach((answer) => {

        const button =
            document.createElement("button");


        button.type = "button";

        button.className = "answer";


        button.innerHTML = `
            <strong>${answer.text}</strong>
            <small>${answer.detail}</small>
        `;


        button.addEventListener("click", () => {

            selectAnswer(answer);

        });


        answersContainer.appendChild(button);

    });

}


/* =====================================================
   RÉPONSE
===================================================== */

function selectAnswer(answer) {

    scores.light +=
        answer.scores.light;

    scores.depth +=
        answer.scores.depth;

    scores.warm +=
        answer.scores.warm;


    /* ================================================
       GENRE / DESTINATION DU PARFUM
    ================================================= */

    if (currentQuestion === 0) {

        if (answer.text === "Pour lui.") {

            audience = "male";

        }

        else if (answer.text === "Pour elle.") {

            audience = "female";

        }

        else {

            audience = "unisex";

        }

    }


    answerMessage.textContent =
        "Votre réponse a été enregistrée.";


    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        }

        else {

            showResult();

        }

    }, 450);

}


/* =====================================================
   CALCUL DU RÉSULTAT
===================================================== */

function showResult() {

    /* ================================================
       UNIVERS DOMINANT
    ================================================= */

    let profile = "light";


    if (
        scores.depth > scores.light &&
        scores.depth > scores.warm
    ) {

        profile = "depth";

    }

    else if (
        scores.warm > scores.light &&
        scores.warm > scores.depth
    ) {

        profile = "warm";

    }


    /* ================================================
       PARFUMS DU MONDE DOMINANT
    ================================================= */

    const fragrances =
        perfumes[profile];


    /* ================================================
       CALCUL DE COMPATIBILITÉ
    ================================================= */

    const scoredPerfumes =
        fragrances.map((perfume) => {

            let score = 0;


            /*
                Correspondance avec l'univers
            */

            score += scores[profile] * 4;


            /*
                Correspondance avec le genre
            */

            if (audience === "unisex") {

                if (perfume.gender === "unisex") {

                    score += 5;

                }

                else {

                    score += 2;

                }

            }

            else if (
                perfume.gender === audience
            ) {

                score += 7;

            }

            else if (
                perfume.gender === "unisex"
            ) {

                score += 5;

            }

            else {

                score -= 3;

            }


            /*
                Petite variation selon les
                trois dimensions olfactives
            */

            score +=
                scores.light *
                (
                    profile === "light"
                        ? 2
                        : 1
                );


            score +=
                scores.depth *
                (
                    profile === "depth"
                        ? 2
                        : 1
                );


            score +=
                scores.warm *
                (
                    profile === "warm"
                        ? 2
                        : 1
                );


            return {
                perfume,
                score
            };

        });


    /* ================================================
       TRI
    ================================================= */

    scoredPerfumes.sort(
        (a, b) => b.score - a.score
    );


    /* ================================================
       MEILLEURS MATCHS
    ================================================= */

    const bestScore =
        scoredPerfumes[0].score;


    const bestMatches =
        scoredPerfumes.filter(
            item =>
                item.score >=
                bestScore - 1
        );


    /*
        Si plusieurs parfums correspondent presque
        parfaitement, on en choisit un au hasard.

        Cela évite que le questionnaire donne
        toujours exactement le même parfum.
    */

    const selected =
        bestMatches[
            Math.floor(
                Math.random() *
                bestMatches.length
            )
        ];


    const perfume =
        selected.perfume;


    /* ================================================
       AFFICHAGE
    ================================================= */

    quiz.classList.remove("active");

    quizResult.classList.add("active");


    resultNumber.textContent =
        perfume.number;


    resultName.textContent =
        perfume.name;


    resultDescription.textContent =
        perfume.description;


    resultImage.src =
        perfume.image;


    resultImage.alt =
        `Parfum ${perfume.name}`;


    resultNotes.textContent =
        perfume.notes;

}


/* =====================================================
   RECOMMENCER
===================================================== */

if (restartTest) {

    restartTest.addEventListener("click", () => {

        currentQuestion = 0;

        scores = {
            light: 0,
            depth: 0,
            warm: 0
        };

        audience = "unisex";


        quizResult.classList.remove("active");

        testIntro.style.display = "block";

        quiz.classList.remove("active");

    });

}

/* =====================================================
   NØVÉA — RESPIRATION
   SCROLL CINÉMATOGRAPHIQUE + POUSSIÈRE DE SABLE
===================================================== */

const scentBreath = document.querySelector("#scentBreath");

if (scentBreath) {

    const lineOne =
        scentBreath.querySelector(".line-one");

    const lineTwo =
        scentBreath.querySelector(".line-two");

    const finalLine =
        scentBreath.querySelector(".scent-breath-final");

    const mark =
        scentBreath.querySelector(".scent-breath-mark span");


    /* =================================================
       POUSSIÈRE / SABLE
    ================================================= */

    const dustLayer =
        document.createElement("div");

    dustLayer.className =
        "scent-dust";

    scentBreath.appendChild(dustLayer);


    /* -------------------------------------------------
       STYLE DE LA POUSSIÈRE
    ------------------------------------------------- */

    const dustStyle =
        document.createElement("style");

    dustStyle.textContent = `

        .scent-dust {

            position: absolute;

            inset: 0;

            overflow: hidden;

            pointer-events: none;

            z-index: 1;

            opacity: 0;

            transition:
                opacity 1.8s ease;

        }


        .scent-dust-particle {

            position: absolute;

            width: var(--size);

            height: var(--size);

            border-radius: 50%;

            background:
                rgba(120, 112, 100, .32);

            filter: blur(
                var(--blur)
            );

            opacity: var(--opacity);

            transform:
                translate3d(0, 0, 0);

            animation:
                scentDustFloat
                var(--duration)
                ease-in-out
                infinite alternate;

            animation-delay:
                var(--delay);

        }


        @keyframes scentDustFloat {

            0% {

                transform:
                    translate3d(
                        var(--x-start),
                        18px,
                        0
                    )
                    scale(.8);

                opacity:
                    0;

            }

            35% {

                opacity:
                    var(--opacity);

            }

            100% {

                transform:
                    translate3d(
                        var(--x-end),
                        -35px,
                        0
                    )
                    scale(1.15);

                opacity:
                    0;

            }

        }


        .scent-breath-inner {

            position: sticky;

            z-index: 3;

        }


        .scent-breath-line,
        .scent-breath-final {

            will-change:
                transform,
                opacity,
                filter;

        }


        .scent-breath-line {

            filter:
                blur(8px);

            transition:
                filter .2s linear;

        }


        .scent-breath-final {

            filter:
                blur(10px);

            transition:
                filter .25s linear;

        }

    `;

    document.head.appendChild(dustStyle);


    /* =================================================
       CRÉATION DES PARTICULES
    ================================================= */

    const particleCount =
        window.innerWidth < 768
            ? 35
            : 65;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "scent-dust-particle";


        const size =
            Math.random() * 3 + 1;


        const left =
            Math.random() * 100;


        const top =
            Math.random() * 100;


        const duration =
            Math.random() * 5 + 5;


        const delay =
            Math.random() * -8;


        const opacity =
            Math.random() * .45 + .15;


        const blur =
            Math.random() * 2 + .5;


        const xStart =
            Math.random() * 30 - 15;


        const xEnd =
            Math.random() * 60 - 30;


        particle.style.setProperty(
            "--size",
            `${size}px`
        );


        particle.style.setProperty(
            "--opacity",
            opacity
        );


        particle.style.setProperty(
            "--blur",
            `${blur}px`
        );


        particle.style.setProperty(
            "--duration",
            `${duration}s`
        );


        particle.style.setProperty(
            "--delay",
            `${delay}s`
        );


        particle.style.setProperty(
            "--x-start",
            `${xStart}px`
        );


        particle.style.setProperty(
            "--x-end",
            `${xEnd}px`
        );


        particle.style.left =
            `${left}%`;


        particle.style.top =
            `${top}%`;


        dustLayer.appendChild(
            particle
        );

    }


    /* =================================================
       ANIMATION AU SCROLL
    ================================================= */

    function updateScentBreath() {

        const rect =
            scentBreath.getBoundingClientRect();


        const scrollableDistance =
            scentBreath.offsetHeight -
            window.innerHeight;


        if (scrollableDistance <= 0) {
            return;
        }


        let progress =
            -rect.top /
            scrollableDistance;


        progress =
            Math.max(
                0,
                Math.min(1, progress)
            );


        /* =============================================
           POUSSIÈRE
        ============================================= */

        /*
            La poussière arrive progressivement.
            Elle ne saute pas brutalement à l'écran.
        */

        const dustProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .02) / .45
                )
            );


        dustLayer.style.opacity =
            dustProgress * .75;


        /* =============================================
           PREMIÈRE PHRASE
        ============================================= */

        const firstProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .04) / .30
                )
            );


        lineOne.style.opacity =
            firstProgress;


        lineOne.style.transform =
            `translateY(
                ${35 - firstProgress * 35}px
            )`;


        lineOne.style.filter =
            `blur(
                ${8 - firstProgress * 8}px
            )`;


        /* =============================================
           TRAIT CENTRAL
        ============================================= */

        const markProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .27) / .25
                )
            );


        mark.style.transform =
            `scaleY(
                ${markProgress}
            )`;


        /* =============================================
           DEUXIÈME PHRASE
        ============================================= */

        const secondProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .30) / .35
                )
            );


        lineTwo.style.opacity =
            secondProgress;


        lineTwo.style.transform =
            `translateY(
                ${55 - secondProgress * 55}px
            )`;


        lineTwo.style.filter =
            `blur(
                ${8 - secondProgress * 8}px
            )`;


        /* =============================================
           PHRASE FINALE
        ============================================= */

        const finalProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    (progress - .68) / .28
                )
            );


        finalLine.style.opacity =
            finalProgress;


        finalLine.style.transform =
            `translateY(
                ${30 - finalProgress * 30}px
            )`;


        finalLine.style.filter =
            `blur(
                ${10 - finalProgress * 10}px
            )`;

    }


    /* =================================================
       PERFORMANCE
    ================================================= */

    let scentBreathTicking =
        false;


    function requestScentBreathUpdate() {

        if (
            scentBreathTicking
        ) {
            return;
        }


        scentBreathTicking =
            true;


        window.requestAnimationFrame(
            () => {

                updateScentBreath();

                scentBreathTicking =
                    false;

            }
        );

    }


    window.addEventListener(
        "scroll",
        requestScentBreathUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestScentBreathUpdate
    );


    /* =================================================
       ACCESSIBILITÉ
    ================================================= */

    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        dustLayer.style.display =
            "none";


        lineOne.style.opacity = "1";
        lineTwo.style.opacity = "1";
        finalLine.style.opacity = "1";

        lineOne.style.transform =
            "none";

        lineTwo.style.transform =
            "none";

        finalLine.style.transform =
            "none";

        lineOne.style.filter =
            "none";

        lineTwo.style.filter =
            "none";

        finalLine.style.filter =
            "none";

        mark.style.transform =
            "scaleY(1)";

    }


    /* =================================================
       PREMIÈRE MISE À JOUR
    ================================================= */

    updateScentBreath();

}

/* =====================================================
   NØVÉA — STORY : APPARITION ÉDITORIALE
===================================================== */

const storySection =
    document.querySelector("#story");


if (storySection) {

    const storyObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        storySection
                            .querySelectorAll(".reveal")
                            .forEach((element, index) => {

                                setTimeout(() => {

                                    element.classList.add("visible");

                                }, index * 180);

                            });

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


    storyObserver.observe(storySection);

}
function sendNoveaMessage() {

    const message =
        document.getElementById("novea-message").value.trim();

    const text = message
        ? `Bonjour NØVÉA, ${message}`
        : `Bonjour NØVÉA, j'aimerais en savoir plus sur vos fragrances.`;

    const 
    sappURL =
        `https://wa.me/?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
}
