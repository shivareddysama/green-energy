// Load your images on page-load
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

// Get all buttons in a NODE LIST of buttons
const buttons = document.querySelectorAll(".button-group button");

// Complete your resource-object
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

// Get the reference to your HTML-container
const contentContainer = document.getElementById("content-container");

// Start your handleSelection function here
function handleSelection(event) {

    // Remove the id active-button from the element that contains it
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }

    // Set the id active-button to the currently clicked button
    event.target.setAttribute("id", "active-button");

    // Get selected content
    const selectedButton = event.target.dataset.content;
    const selectedContent = resources[selectedButton];

    // Load content into HTML-container
    contentContainer.innerHTML = `
        <h1>${selectedContent.headingContent}</h1>
        <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
        <p>${selectedContent.bodyText}</p>
    `;
}

// Register all buttons to click event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}