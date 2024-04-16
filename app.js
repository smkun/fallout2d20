// app.js

import perks from "./perks.js";
import { origins, specialAttributes, skills } from "./charData.js";
console.log("Script loaded");

// Function to render the origin selection
function renderOriginSelection() {
    console.log("renderOriginSelection called");
    const originSelectionElement = document.getElementById("origin-selection");
    originSelectionElement.innerHTML = `
        <h2>Select Your Origin</h2>
        <select id="origin-select">
            <option value="">-- Select Origin --</option>
            ${origins
                .map(
                    (origin) => `
                <option value="${origin.name}">${origin.name}</option>
            `
                )
                .join("")}
        </select>
        <button id="select-origin">Select Origin</button>
    `;

    const selectOriginButton = document.getElementById("select-origin");
    selectOriginButton.addEventListener("click", handleOriginSelection);
}

// Function to handle origin selection
function handleOriginSelection() {
    const originSelect = document.getElementById("origin-select");
    const selectedOrigin = originSelect.value;
    if (selectedOrigin) {
        // Initialize the character object here
        let character = {
            origin: selectedOrigin,
            specialPoints: 5,
            attributes: {
                str: 5,
                per: 5,
                end: 5,
                cha: 5,
                int: 5,
                agi: 5,
                lck: 5,
            },
            skillPoints: 9,
            tagSkills: [],
            skills: {},
            perks: [],
        };

        console.log("Selected origin:", character.origin);
        // Update the content of the origin-selection section
        const originSelectionElement =
            document.getElementById("origin-selection");
        originSelectionElement.innerHTML = `
            <h2>Selected Origin: ${selectedOrigin}</h2>
        `;
        // Update the character summary section with the selected origin
        const characterSummaryElement =
            document.getElementById("character-summary");
        characterSummaryElement.innerHTML += `<p>Origin: ${selectedOrigin}</p>`;
        // Hide the origin selection section and show the next section
        document.getElementById("origin-selection").style.display = "none";
        document.getElementById("special-attributes").style.display = "block";

        // Call the renderSpecialAttributes function here
        renderSpecialAttributes(character);
    }
}

// Function to render the S.P.E.C.I.A.L. attribute allocation
function renderSpecialAttributes(character) {
    console.log("renderSpecialAttributes called");
    const specialAttributesElement =
        document.getElementById("special-attributes");
    specialAttributesElement.innerHTML = `
        <h2>Allocate Your S.P.E.C.I.A.L. Attributes</h2>
        <ul>
            ${specialAttributes
                .map(
                    (attribute) => `
                <li>
                    <label for="${attribute.abbreviation}">${attribute.name} (${
                        attribute.abbreviation
                    }):</label>
                    <input type="number" id="${attribute.abbreviation}" name="${
                        attribute.abbreviation
                    }" min="4" max="10" value="${
                        character.attributes[
                            attribute.abbreviation.toLowerCase()
                        ]
                    }">
                </li>
            `
                )
                .join("")}
        </ul>
        <p>Points remaining: <span id="attribute-points-remaining">${
            character.specialPoints
        }</span></p>
        <button id="allocate-attributes">Allocate Attributes</button>
    `;

    // Attach event listeners to individual attribute inputs
    specialAttributes.forEach((attribute) => {
        const attributeInput = document.getElementById(attribute.abbreviation);
        attributeInput.addEventListener("change", () =>
            handleAttributeChange(character, attribute.abbreviation)
        );
    });

    const allocateAttributesButton = document.getElementById(
        "allocate-attributes"
    );
    allocateAttributesButton.addEventListener("click", () =>
        handleAttributeAllocation(character)
    );
}

// Function to handle attribute change
function handleAttributeChange(character, attributeName) {
    const attributeInput = document.getElementById(attributeName);
    const inputValue = parseInt(attributeInput.value);

    if (!isNaN(inputValue) && inputValue >= 4 && inputValue <= 10) {
        const pointsRemaining =
            character.specialPoints -
            (inputValue - character.attributes[attributeName.toLowerCase()]);
        if (pointsRemaining >= 0) {
            character.attributes[attributeName.toLowerCase()] = inputValue;
            character.specialPoints = pointsRemaining;
            document.getElementById("attribute-points-remaining").textContent =
                character.specialPoints;
        } else {
            attributeInput.value =
                character.attributes[attributeName.toLowerCase()];
        }
    } else {
        attributeInput.value =
            character.attributes[attributeName.toLowerCase()];
    }
}

// Function to handle attribute allocation
function handleAttributeAllocation(character) {
    console.log("Allocated attributes:", character.attributes);
    // Update the skill points based on the INT attribute
    character.skillPoints += character.attributes.int;
    // Hide the S.P.E.C.I.A.L. attributes section and show the next section
    document.getElementById("special-attributes").style.display = "none";
    document.getElementById("tag-skills").style.display = "block";

    // Render the tag skills section
    renderTagSkills(character);
}

// Function to render the tag skill selection and skill point allocation
function renderTagSkills(character) {
    const tagSkillsElement = document.getElementById("tag-skills");
    const tagSkillListElement = document.getElementById("tag-skill-list");
    tagSkillListElement.innerHTML = skills
        .map(
            (skill) => `
            <li>
                <input type="checkbox" id="${
                    skill.name
                }" name="tag-skill" value="${skill.name}" ${
                character.tagSkills.includes(skill.name) ? "checked" : ""
            }>
                <label for="${skill.name}">${skill.name} (${
                skill.attribute
            })</label>
                <input type="number" id="${skill.name}-rank" name="${
                skill.name
            }-rank" min="0" max="3" value="${
                character.skills[skill.name] || 0
            }">
            </li>
        `
        )
        .join("");

    document.getElementById("skill-points-remaining").textContent =
        character.skillPoints;

    // Add event listeners for tag skill selection and skill point allocation
    tagSkillsElement.addEventListener("change", (event) =>
        handleTagSkillSelection(event, character)
    );
    tagSkillsElement.addEventListener("input", (event) =>
        handleSkillPointAllocation(event, character)
    );

    const selectTagSkillsButton = document.getElementById("select-tag-skills");
    selectTagSkillsButton.addEventListener("click", () =>
        handleTagSkillConfirmation(character)
    );
}

// Function to handle tag skill selection
function handleTagSkillSelection(event, character) {
    const target = event.target;
    if (target.name === "tag-skill") {
        const selectedTagSkills = Array.from(
            document.querySelectorAll('input[name="tag-skill"]:checked')
        );
        if (selectedTagSkills.length > 3) {
            target.checked = false;
            alert("You can only select up to 3 tag skills.");
        } else {
            const skillName = target.value;
            const skillRankInput = document.getElementById(`${skillName}-rank`);
            if (target.checked) {
                character.tagSkills.push(skillName);
                skillRankInput.value = "2";
                character.skills[skillName] = 2;
                character.skillPoints -= 2;
            } else {
                const index = character.tagSkills.indexOf(skillName);
                if (index !== -1) {
                    character.tagSkills.splice(index, 1);
                    const previousPoints = character.skills[skillName] || 0;
                    character.skillPoints += previousPoints;
                    character.skills[skillName] = 0;
                    skillRankInput.value = "0";
                }
            }
            document.getElementById("skill-points-remaining").textContent =
                character.skillPoints;
        }
    }
}

// Function to handle skill point allocation
function handleSkillPointAllocation(event, character) {
    const target = event.target;
    if (target.name.endsWith("-rank")) {
        const skillName = target.name.split("-")[0];
        const inputValue = parseInt(target.value);
        const previousValue = character.skills[skillName] || 0;
        const pointsToAllocate = inputValue - previousValue;
        if (pointsToAllocate <= character.skillPoints && inputValue <= 3) {
            character.skills[skillName] = inputValue;
            character.skillPoints -= pointsToAllocate;
            document.getElementById("skill-points-remaining").textContent =
                character.skillPoints;
        } else {
            target.value = previousValue;
        }
    }
}

// Function to handle tag skill confirmation
function handleTagSkillConfirmation(character) {
    if (character.tagSkills.length === 3) {
        console.log("Selected tag skills:", character.tagSkills);
        console.log("Skill points allocated:", character.skills);
        // Hide the tag skills section and show the next section
        document.getElementById("tag-skills").style.display = "none";
        document.getElementById("perk-selection").style.display = "block";

        // Render the perk selection section
        renderPerkSelection(character);
    } else {
        alert("Please select 3 tag skills before proceeding.");
    }
}

// Function to render the perk selection
function renderPerkSelection(character) {
    const perkSelectionElement = document.getElementById("perk-selection");
    perkSelectionElement.style.display = "block";

    const perkDropdownsElement = document.getElementById("perk-dropdowns");
    perkDropdownsElement.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const perkDropdown = document.createElement("select");
        perkDropdown.id = `perk-${i}`;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = `-- Select Perk ${i} --`;
        perkDropdown.appendChild(defaultOption);

        perks.forEach((perk) => {
            const perkOption = document.createElement("option");
            perkOption.value = perk.name;
            perkOption.textContent = perk.name;
            perkDropdown.appendChild(perkOption);
        });

        perkDropdownsElement.appendChild(perkDropdown);
    }

    const selectPerksButton = document.getElementById("select-perks");
    selectPerksButton.addEventListener("click", () =>
        handlePerkSelection(character)
    );
}

// Function to handle perk selection
function handlePerkSelection(character) {
    const selectedPerks = [];
    for (let i = 1; i <= 3; i++) {
        const perkDropdown = document.getElementById(`perk-${i}`);
        const selectedPerk = perkDropdown.value;
        if (selectedPerk) {
            selectedPerks.push(selectedPerk);
        }
    }
    character.perks = selectedPerks;
    console.log("Selected perks:", character.perks);
    // Hide the perk selection section and show the next section
    document.getElementById("perk-selection").style.display = "none";
    document.getElementById("derived-statistics").style.display = "block";
}

// Call the functions to render the character creation steps
renderOriginSelection();
