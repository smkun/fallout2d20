// charData.js

// charData.js

// Define the origins data
export const origins = [
    {
        name: "Brotherhood of Steel",
        trait: "The Chain that Binds",
        attribute_modifiers: null,
        skill_modifiers: null,
        tag_skills: ["Energy Weapons", "Science", "Repair"],
        max_skill_ranks: null,
        robot: false
    },
    {
        name: "Ghoul",
        trait: "Necrotic Post-Human",
        attribute_modifiers: null,
        skill_modifiers: { survival: 2 },
        tag_skills: ["Survival"],
        max_skill_ranks: null,
        robot: false
    },
    {
        name: "Super Mutant",
        trait: "Forced Evolutionary Virus (FEV)",
        attribute_modifiers: {
            STR: {value: 2, max: 12},
            END: {value: 2, max: 12},
            INT: {value: 0, max: 6},
            CHA: {value: 0, max: 6}
        },
        skill_modifiers: null,
        max_skill_ranks: 4,
        robot: false
    },
    {
        name: "Mister Handy",
        trait: "Mister Handy Robot",
        attribute_modifiers: null,
        skill_modifiers: null,
        tag_skills: null,
        max_skill_ranks: null,
        robot: true
    },
    {
        name: "Survivor",
        trait: "Wasteland Survivor",
        attribute_modifiers: null,
        skill_modifiers: null,
        tag_skills: null,
        max_skill_ranks: null,
        robot: false
    },
    {
        name: "Vault Dweller",
        trait: "Vault Kid",
        attribute_modifiers: null,
        skill_modifiers: null,
        tag_skills: null,
        max_skill_ranks: null,
        robot: false
    },
];




// Define the S.P.E.C.I.A.L. attributes data
export const specialAttributes = [
    { name: "Strength", abbreviation: "STR", max: 10 },
    { name: "Perception", abbreviation: "PER", max: 10 },
    { name: "Endurance", abbreviation: "END", max: 10 },
    { name: "Charisma", abbreviation: "CHA", max: 10 },
    { name: "Intelligence", abbreviation: "INT", max: 10 },
    { name: "Agility", abbreviation: "AGI", max: 10 },
    { name: "Luck", abbreviation: "LCK", max: 10 },
];


// Define the skills data
export const skills = [
    { name: "Athletics", attribute: "STR" },
    { name: "Barter", attribute: "CHA" },
    { name: "Big Guns", attribute: "END" },
    { name: "Energy Weapons", attribute: "PER" },
    { name: "Explosives", attribute: "PER" },
    { name: "Lockpick", attribute: "PER" },
    { name: "Medicine", attribute: "INT" },
    { name: "Melee Weapons", attribute: "STR" },
    { name: "Pilot", attribute: "PER" },
    { name: "Repair", attribute: "INT" },
    { name: "Science", attribute: "INT" },
    { name: "Small Guns", attribute: "AGI" },
    { name: "Sneak", attribute: "AGI" },
    { name: "Speech", attribute: "CHA" },
    { name: "Survival", attribute: "END" },
    { name: "Throwing", attribute: "AGI" },
    { name: "Unarmed", attribute: "STR" },
];

