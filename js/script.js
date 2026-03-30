// preload the images so they dont flash when switching tabs
function preloader() {

    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];

    const images = [];

    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:
${images[0].src}
${images[1].src}
${images[2].src}`);
}

window.addEventListener("load", preloader);

const buttons = document.querySelectorAll(".button-group button");

const resources = {
    solar: {
        headingContent: "Solar Savings",
        bodyText: "Solar energy is becoming more affordable through government rebates, financing programs and lower installation costs. Families can reduce long-term electricity bills without needing to pay the full amount upfront.",
        imgUrl: "./img/img-1.jpg",
        imgAlt: "Solar panels on a residential roof"
    },
    efficiency: {
        headingContent: "Home Efficiency",
        bodyText: "Improving home efficiency is one of the cheapest ways to support clean energy. Better insulation, LED lighting and energy-efficient appliances reduce waste and lower electricity use for households with average budgets.",
        imgUrl: "./img/img-2.jpg",
        imgAlt: "Energy efficient home improvement work"
    },
    community: {
        headingContent: "Community Energy",
        bodyText: "Community energy projects make clean power more accessible for renters and families who cannot install private systems. Shared solar and local renewable programs spread the cost and benefits across many households.",
        imgUrl: "./img/img-3.jpg",
        imgAlt: "Community renewable energy project"
    }
};

const contentContainer = document.getElementById("content-container");

function handleSelection(event) {

    // loop through and remove active id from all buttons first
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }

    event.target.setAttribute("id", "active-button");

    const selectedButton = event.target.dataset.content;
    const selectedContent = resources[selectedButton];

    // update the content area
    contentContainer.innerHTML = `
        <h1>${selectedContent.headingContent}</h1>
        <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
        <p>${selectedContent.bodyText}</p>
    `;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}
