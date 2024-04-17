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
        const origin = origins.find((origin) => origin.name === selectedOrigin);
        // Initialize the character object here
        let character = {
            origin: selectedOrigin,
            originData: origin, // Store the origin object in the character object
            specialPoints: 5,
            attributes: {
                STR: 5,
                PER: 5,
                END: 5,
                CHA: 5,
                INT: 5,
                AGI: 5,
                LCK: 5,
            },
            skillPoints: 9,
            tagSkills: origin.tag_skills || [],
            skills: {},
            perks: [],
        };

        // Apply attribute modifiers from the selected origin
        if (origin.attribute_modifiers) {
            for (const attribute in origin.attribute_modifiers) {
                character.attributes[attribute] +=
                    origin.attribute_modifiers[attribute].value;
            }
        }

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
              .map((attribute) => {
                  const abbreviation = attribute.abbreviation;
                  const originMod =
                      character.originData.attribute_modifiers &&
                      character.originData.attribute_modifiers[abbreviation];
                  const minValue = originMod ? Math.max(originMod.value, 4) : 4; // Ensuring a minimum of 4
                  const maxValue = originMod ? originMod.max : attribute.max;
                  const currentValue = character.attributes[abbreviation];

                  return `
                  <li>
                      <label for="${abbreviation}">${attribute.name} (${abbreviation}):</label>
                      <input type="number" id="${abbreviation}" name="${abbreviation}" min="${minValue}" max="${maxValue}" value="${currentValue}">
                  </li>`;
              })
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
function handleAttributeChange(character, attributeNameAbbrev) {
    const attributeInput = document.getElementById(attributeNameAbbrev);
    const inputValue = parseInt(attributeInput.value);

    const originAttributeMod =
        character.originData.attribute_modifiers &&
        character.originData.attribute_modifiers[attributeNameAbbrev]
            ? character.originData.attribute_modifiers[attributeNameAbbrev]
            : { value: 4, max: 10 }; // Default to S.P.E.C.I.A.L max if no modifier
    const minValue = Math.max(4, originAttributeMod.value); // Ensure the minimum is at least 4
    const maxValue = originAttributeMod.max;

    if (
        !isNaN(inputValue) &&
        inputValue >= minValue &&
        inputValue <= maxValue
    ) {
        const pointsChange =
            inputValue - character.attributes[attributeNameAbbrev];
        if (character.specialPoints - pointsChange >= 0) {
            character.attributes[attributeNameAbbrev] = inputValue;
            character.specialPoints -= pointsChange;
            document.getElementById("attribute-points-remaining").textContent =
                character.specialPoints;
        } else {
            attributeInput.value = character.attributes[attributeNameAbbrev];
        }
    } else {
        attributeInput.value = character.attributes[attributeNameAbbrev];
    }
}

// Function to handle attribute allocation
function handleAttributeAllocation(character) {
    console.log("Allocated attributes:", character.attributes);
    // Update the skill points based on the INT attribute
    character.skillPoints = 10 + character.attributes.INT; // Reset to initial plus INT
    document.getElementById("skill-points-remaining").textContent =
        character.skillPoints;
    document.getElementById("special-attributes").style.display = "none";
    document.getElementById("tag-skills").style.display = "block";
    renderTagSkills(character);
}

// Function to render the tag skill selection and skill point allocation
function renderTagSkills(character) {
    const tagSkillsElement = document.getElementById("tag-skills");
    tagSkillsElement.innerHTML = `
      <ul>
          ${skills
              .map((skill) => {
                  const isOriginSkill =
                      character.originData.tag_skills &&
                      character.originData.tag_skills.includes(skill.name);
                  const isUserSelected =
                      character.tagSkills.includes(skill.name) &&
                      !isOriginSkill;
                  const initialRank = isOriginSkill
                      ? 2
                      : character.skills[skill.name] || 0;
                  return `
                  <li>
                      <input type="checkbox" id="${
                          skill.name
                      }" name="tag-skill" value="${skill.name}" ${
                      isUserSelected ? "checked" : ""
                  } ${isOriginSkill ? "disabled" : ""}>
                      <label for="${skill.name}">${skill.name} (${
                      skill.attribute
                  }) ${isOriginSkill ? "(Origin Skill)" : ""}</label>
                      <input type="number" id="${skill.name}-rank" name="${
                      skill.name
                  }-rank" min="0" max="3" value="${initialRank}">
                  </li>`;
              })
              .join("")}
      </ul>
      <p>Skill Points Remaining: <span id="skill-points-remaining">${
          character.skillPoints
      }</span></p>
      <button id="confirm-tag-skills">Confirm Tag Skills</button>
  `;

    document
        .getElementById("confirm-tag-skills")
        .addEventListener("click", () => handleTagSkillConfirmation(character));

    // Attach event listeners for tag skill checkbox selection and skill point allocation
    skills.forEach((skill) => {
        const checkbox = document.getElementById(skill.name);
        checkbox.addEventListener("change", (event) =>
            handleTagSkillSelection(event, character)
        );

        const input = document.getElementById(`${skill.name}-rank`);
        input.addEventListener("input", (event) =>
            handleSkillPointAllocation(event, character)
        );
    });
}

// Function to handle tag skill selection
function handleTagSkillSelection(event, character) {
    const checkbox = event.target;
    const skillName = checkbox.value;
    const isChecked = checkbox.checked;
    const skillRankInput = document.getElementById(`${skillName}-rank`);

    if (isChecked && !character.tagSkills.includes(skillName)) {
        const userSelectedTagSkills = character.tagSkills.filter(
            (skill) =>
                !character.originData.tag_skills ||
                !character.originData.tag_skills.includes(skill)
        );
        if (userSelectedTagSkills.length < 3) {
            // Check if less than 3 user-selected tag skills
            character.tagSkills.push(skillName);
            skillRankInput.value = "2"; // Default rank when selected
            character.skills[skillName] = 2;
        } else {
            checkbox.checked = false; // Revert checkbox if limit exceeded
            alert("You can only select up to 3 tag skills.");
        }
    } else if (!isChecked) {
        const index = character.tagSkills.indexOf(skillName);
        if (index > -1) {
            character.tagSkills.splice(index, 1);
            character.skills[skillName] = 0;
            skillRankInput.value = "0"; // Reset the rank input
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
    const totalSelectedTagSkills = character.tagSkills.length;
    if (totalSelectedTagSkills >= 3) {
        console.log("Selected tag skills:", character.tagSkills);
        console.log("Skill points allocated:", character.skills);
        // Hide the tag skills section and show the next section
        document.getElementById("tag-skills").style.display = "none";
        document.getElementById("perk-selection").style.display = "block";

        // Render the perk selection section
        renderPerkSelection(character);
    } else {
        alert(
            `Please select ${
                3 - totalSelectedTagSkills
            } more tag skills before proceeding.`
        );
    }
}

// Function to render the perk selection
function renderPerkSelection(character) {
    const perkSelectionElement = document.getElementById("perk-selection");
    perkSelectionElement.style.display = "block";

    const perkDropdownsElement = document.getElementById("perk-dropdowns");
    perkDropdownsElement.innerHTML = "";

    // Filter the perks based on the character's attributes, level, and other requirements
    const eligiblePerks = perks.filter((perk) => {
        const meetsAttributeRequirements = Object.entries(
            perk.requirements || {}
        ).every(([attribute, value]) => {
            if (attribute === "level") {
                return character.level >= value;
            } else if (attribute === "robot") {
                return character.originData.robot === value;
            } else {
                return character.attributes[attribute] >= value;
            }
        });
        return meetsAttributeRequirements;
    });

    for (let i = 1; i <= 3; i++) {
        const perkDropdown = document.createElement("select");
        perkDropdown.id = `perk-${i}`;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = `-- Select Perk ${i} --`;
        perkDropdown.appendChild(defaultOption);

        eligiblePerks.forEach((perk) => {
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
