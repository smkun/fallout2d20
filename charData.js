// charData.js

// Define the origins data
export const origins = [
    {
        name: "Brotherhood of Steel",
        trait: "The Chain that Binds",
        attribute_modifiers: null,
        skill_modifiers: { energy_weapons: 2, science: 2, repair: 2 },
    },
    {
        name: "Ghoul",
        trait: "Necrotic Post-Human",
        attribute_modifiers: null,
        skill_modifiers: { survival: 2 },
    },
    {
        name: "Super Mutant",
        trait: "Forced Evolutionary Virus (FEV)",
        attribute_modifiers: {
            strength: 2,
            endurance: 2,
            intelligence: -4,
            charisma: -4,
        },
        skill_modifiers: null,
    },
    {
        name: "Mister Handy",
        trait: "Mister Handy Robot",
        attribute_modifiers: null,
        skill_modifiers: null,
    },
    {
        name: "Survivor",
        trait: "Wasteland Survivor",
        attribute_modifiers: null,
        skill_modifiers: null,
    },
    {
        name: "Vault Dweller",
        trait: "Vault Kid",
        attribute_modifiers: null,
        skill_modifiers: null,
    },
];

// Define the S.P.E.C.I.A.L. attributes data
export const specialAttributes = [
    { name: "Strength", abbreviation: "STR" },
    { name: "Perception", abbreviation: "PER" },
    { name: "Endurance", abbreviation: "END" },
    { name: "Charisma", abbreviation: "CHA" },
    { name: "Intelligence", abbreviation: "INT" },
    { name: "Agility", abbreviation: "AGI" },
    { name: "Luck", abbreviation: "LCK" },
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

