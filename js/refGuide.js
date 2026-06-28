import { controlRating, herbicideNames, weedControl, brushControl } from "./weedBrushReference.js";

const controlTypeSelect = document.getElementById("control-type");
const plantNameSelect = document.getElementById("plant-name");

const getRecommendationBtn = document.getElementById("get-recommendation-button");

const recommendationsContainer = document.getElementById("output-container");

let plantSelectList = [];


//Functions

// Helper to get control array based on user selection
function getControlArray() {
    if (controlTypeSelect.value === "weed") {
        return weedControl;
    }

    if (controlTypeSelect.value === "brush") {
        return brushControl;
    }

    return null;
}


// Helper to disable/enable getRecommendationBtn based on user selections
function updateRecommendationButton() {
    getRecommendationBtn.disabled = 
        !controlTypeSelect.value || !plantNameSelect.value;
}


// Helper to clear recommendations from the HTML
function clearRecommendations() {
    recommendationsContainer.innerHTML = 
        `<p class="text-center">Select a control type and target, then click <strong class="text-blue-600 dark:text-lime-600">Get Recommendations</strong>.</p>`;
}


// Get list of plant names from control array
function getPlantList(controlArray) {
    const plantSet = new Set();

    controlArray.forEach(entry => {
        entry.plantName.forEach(name => {
            plantSet.add(name);
        });
    });
        
    return [...plantSet].sort((a, b) => a.localeCompare(b));
}

// console.log(getPlantList(weedControl));
// console.log(getPlantList(brushControl));


// Populate <select> element with plant list names
function populatePlantSelect(controlArray) {
    plantSelectList.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a plant / target";
    defaultOption.selected = true;
    defaultOption.disabled = true;

    plantNameSelect.appendChild(defaultOption);

    const plantList = getPlantList(controlArray);

    plantList.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        plantNameSelect.appendChild(option);
    });

    plantNameSelect.disabled = false;
}


// Find all entries that match selected plnat/target
function findMatchingEntries(controlArray, selectedPlant) {
    return controlArray.filter(entry => 
        entry.plantName.includes(selectedPlant)
    );
}

// console.log(findMatchingEntries(brushControl, "tasajillo"));
// console.log(findMatchingEntries(weedControl, "ragweed"));


// Render the herbicide recommendations to the HTML
function renderRecommendations(recommendationGroups) {
    clearRecommendations();

    recommendationGroups.forEach(group => {
        console.log(group.plantName);
        const section = renderRecommendationSection(group);
        recommendationsContainer.appendChild(section);
    });
}


function renderRecommendationSection(group) {
    const section = document.createElement("section");
    section.className = "border border-stone-500 rounded-lg p-4 mb-6 bg-stone-200 dark:bg-stone-800 shadow-sm";

    const heading = document.createElement("h3");
    heading.textContent = "Applies to:";
    heading.className = "text-lg font-semibold border-b border-stone-400 dark:border-stone600 pb-2 mb-3";

    const targetList = document.createElement("ul");
    targetList.className = "list-disc list-inside text-sm mb-6";

    group.plantName.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        targetList.appendChild(listItem);
    });

    const cardContainer = document.createElement("div");
    cardContainer.className = "space-y-4 pt-4 border-stone-300 dark:border-stone-700";

    section.appendChild(heading);
    section.appendChild(targetList);
    section.appendChild(cardContainer);

    return section;
}


function renderHerbicideCard(herbicide) {

}


// Event listeners
controlTypeSelect.addEventListener("change", () => {
    if (!controlTypeSelect.value) return;

    clearRecommendations();
    
    plantNameSelect.innerHTML = "";
    plantNameSelect.disabled = true;

    const controlArray = getControlArray();

    if (!controlArray) {
        return;
    }

    populatePlantSelect(controlArray);
    updateRecommendationButton();
});


plantNameSelect.addEventListener("change", () => {
    clearRecommendations();
    updateRecommendationButton();
});


getRecommendationBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(!controlTypeSelect.value || !plantNameSelect.value) {
        return;
    }

    const controlArray = getControlArray();

    const recommedationGroups = findMatchingEntries(
        controlArray, 
        plantNameSelect.value
    );

    // console.log(recommedationGroups);

    renderRecommendations(recommedationGroups);
});

