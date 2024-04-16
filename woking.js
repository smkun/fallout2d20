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
      skillPoints: 0,
      tagSkills: [],
      perks: [],
    };

    console.log("Selected origin:", character.origin);
    // Update the content of the origin-selection section
    const originSelectionElement = document.getElementById("origin-selection");
    originSelectionElement.innerHTML = `
      <h2>Selected Origin: ${selectedOrigin}</h2>
    `;
    // Update the character summary section with the selected origin
    const characterSummaryElement = document.getElementById("character-summary");
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
  const specialAttributesElement = document.getElementById("special-attributes");
  specialAttributesElement.innerHTML = `
    <h2>Allocate Your S.P.E.C.I.A.L. Attributes</h2>
    <ul>
      ${specialAttributes
        .map(
          (attribute) => `
        <li>
          <label for="${attribute.abbreviation}">${attribute.name} (${attribute.abbreviation}):</label>
          <input type="number" id="${attribute.abbreviation}" name="${attribute.abbreviation}" min="4" max="10" value="${character.attributes[attribute.abbreviation.toLowerCase()]}">
        </li>
      `
        )
        .join("")}
    </ul>
    <p>Points remaining: <span id="attribute-points-remaining">${character.specialPoints}</span></p>
    <button id="allocate-attributes">Allocate Attributes</button>
  `;

  // Attach the event listener to the parent element
  specialAttributesElement.addEventListener("change", (event) => handleAttributeChange(event, character));

  const allocateAttributesButton = document.getElementById("allocate-attributes");
  allocateAttributesButton.addEventListener("click", () => handleAttributeAllocation(character));
}

// Function to handle attribute change
function handleAttributeChange(event, character) {
  const target = event.target;

  // Check if the event target is an input element
  if (target.tagName.toLowerCase() !== 'input') {
    return; // Exit the function if the target is not an input
  }

  const attributeName = target.name.toLowerCase();

  // Check if attributeName is defined
  if (!attributeName) {
    console.error('Invalid attribute name');
    return;
  }

  const inputValue = Number(target.value);

  // Check if the input value is a valid number between 4 and 10
  if (!isNaN(inputValue) && inputValue >= 4 && inputValue <= 10) {
    const pointsRemaining = character.specialPoints - (inputValue - character.attributes[attributeName]);
    if (pointsRemaining >= 0) {
      character.attributes[attributeName] = inputValue;
      character.specialPoints = pointsRemaining;
      document.getElementById("attribute-points-remaining").textContent = character.specialPoints;
    } else {
      target.value = character.attributes[attributeName];
    }
  } else {
    target.value = character.attributes[attributeName];
  }
}

// Function to handle attribute allocation
function handleAttributeAllocation(character) {
    console.log("Allocated attributes:", character.attributes);
    // Hide the S.P.E.C.I.A.L. attributes section and show the next section
    document.getElementById("special-attributes").style.display = "none";
    document.getElementById("tag-skills").style.display = "block";

    // Render the tag skills section
    renderTagSkills(character);
}

// Function to render the tag skill selection and skill point allocation
function renderTagSkills(character) {
    const tagSkillsElement = document.getElementById("tag-skills");
    tagSkillsElement.innerHTML = `
        <h2>Select Your Tag Skills</h2>
        <ul>
            ${skills
                .map(
                    (skill) => `
                <li>
                    <input type="checkbox" id="${skill.name}" name="tag-skill" value="${skill.name}">
                    <label for="${skill.name}">${skill.name} (${skill.attribute})</label>
                </li>
            `
                )
                .join("")}
        </ul>
        <p>Skill points remaining: <span id="skill-points-remaining">${
            character.skillPoints
        }</span></p>
        <button id="select-tag-skills">Select Tag Skills</button>
    `;

    const selectTagSkillsButton = document.getElementById("select-tag-skills");
    selectTagSkillsButton.addEventListener("click", () => handleTagSkillSelection(character));
}

// Function to handle tag skill selection
function handleTagSkillSelection(character) {
    const selectedTagSkills = Array.from(
        document.querySelectorAll('input[name="tag-skill"]:checked')
    ).map((input) => input.value);
    character.tagSkills = selectedTagSkills;
    console.log("Selected tag skills:", character.tagSkills);
    // Hide the tag skills section and show the next section
    document.getElementById("tag-skills").style.display = "none";
    document.getElementById("perk-selection").style.display = "block";

    // Render the perk selection section
    renderPerkSelection(character);
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
    selectPerksButton.addEventListener("click", () => handlePerkSelection(character));
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