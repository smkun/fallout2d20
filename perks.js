const perks = [
    {
        name: "Action Boy/Girl",
        description:
            "When you spend AP to take an additional major action, you do not suffer the increased skill test difficulty during your second action.",
        ranks: 1,
        requirements: { level: 1 },
    },
    {
        name: "Adamantium Skeleton",
        description:
            "When you suffer damage, the amount of damage needed to inflict a critical hit on you increases by your rank in this perk.",
        ranks: 3,
        requirements: { endurance: 7, level: 1 },
    },
    {
        name: "Adrenalin Rush",
        description:
            "When your health is below its maximum value, you count your STR score as 10 for all purposes when attempting a STR-based skill test or melee attack.",
        ranks: 1,
        requirements: { strength: 7 },
    },
    {
        name: "Animal Friend",
        description:
            "Whenever a creature NPC with the Mammal, Lizard, or Insect keyword would attack you, roll 10: on any result other than an Effect, the creature chooses not to attack you, although it may still attack another character it can target.",
        ranks: 2,
        requirements: { charisma: 6, level: 1 },
    },
    {
        name: "Aquaboy/Aquagirl",
        description:
            "At rank 1, you no longer take radiation damage from swimming in irradiated water, and you can hold your breath for twice as long as normal. At rank 2, enemies add +2 to the difficulty to tests to detect you while you are submerged underwater.",
        ranks: 2,
        requirements: { endurance: 5, level: 1 },
    },
    {
        name: "Armorer",
        description:
            "You can modify armor with armor mods. Each rank in this perk unlocks an additional rank of mods: rank 1 unlocks rank 1 mods, rank 2 unlocks rank 2 mods, etc.",
        ranks: 4,
        requirements: { strength: 5, intelligence: 6 },
    },
    {
        name: "Awareness",
        description:
            "When you take the Aim minor action at a target within Close range, you spot their weaknesses and can attack more efficiently. The next attack you make against that target gains the Piercing 1 damage effect, or improves the rating of any existing Piercing X damage effect by 1.",
        ranks: 1,
        requirements: { perception: 7 },
    },
    {
        name: "Barbarian",
        description:
            "Your physical Damage Resistance increases on all hit locations based on your STR. You do not gain this benefit while wearing Power Armor.",
        ranks: 1,
        requirements: { strength: 7, level: 4, robot: false },
    },
    {
        name: "Basher",
        description:
            "When you make a melee attack by bashing with your gun, your attack gains the Vicious damage effect.",
        ranks: 1,
        requirements: { strength: 6 },
    },
    {
        name: "Better Criticals",
        description:
            "When you inflict one or more points of damage to an enemy, you may spend 1 Luck Point to automatically inflict a critical hit, causing an injury.",
        ranks: 1,
        requirements: { luck: 9 },
    },
    {
        name: "Big Leagues",
        description:
            "When you make a melee attack with a two-handed melee weapon, the weapon gains the Vicious damage effect.",
        ranks: 1,
        requirements: { strength: 8 },
    },
    {
        name: "Black Widow/Lady Killer",
        description:
            "When you attempt a CHA based skill test to influence a character of the chosen gender, you may re-roll 1d20. In addition, your attacks inflict +1D additional damage against characters of the chosen gender.",
        ranks: 1,
        requirements: { charisma: 6 },
    },
    {
        name: "Blacksmith",
        description:
            "You can modify melee weapons with weapon mods. Each rank in this perk unlocks an additional rank of melee weapon mods: rank 1 unlocks rank 1 mods, rank 2 unlocks rank 2 mods, and rank 3 unlocks rank 3 mods.",
        ranks: 3,
        requirements: { strength: 6, level: 2 },
    },
    {
        name: "Blitz",
        description:
            "When you move into reach of an opponent and make a melee attack against them in one turn, you may re-roll one d20 on your attack. At rank 2, you also inflict +1 damage with that attack.",
        ranks: 2,
        requirements: { agility: 9, level: 1 },
    },
    {
        name: "Bloody Mess",
        description:
            "Your attacks cause enemies to explode into a bloody mess.",
        ranks: 1,
        requirements: { luck: 6 },
    },
    {
        name: "Can Do!",
        description: "You can craft and modify items more effectively.",
        ranks: 1,
        requirements: { luck: 5 },
    },
    {
        name: "Cap Collector",
        description:
            "When you buy or sell items, you may increase or decrease the price of the goods being traded by 10%.",
        ranks: 1,
        requirements: { charisma: 5 },
    },
    {
        name: "Cautious Nature",
        description:
            "Whenever you attempt a skill test, and you buy one or more d20s by spending Action Points, you may re-roll 1d20 on that test. You may not purchase this perk if you have Daring Nature.",
        ranks: 1,
        requirements: { perception: 7 },
    },
    {
        name: "Center Mass",
        description:
            "When you make a ranged attack, you may choose to strike your target's Torso location (or equivalent, for creatures that use a different location table) without increasing the difficulty of the attack. In addition, you may re-roll 1d20 when making the test for your attack.",
        ranks: 1,
        requirements: { agility: 7 },
    },
    {
        name: "Commando",
        description:
            "When you make a ranged attack with any weapon with a Fire Rate of 3 or higher (except heavy weapons), you add +1D per rank to the weapon's damage.",
        ranks: 2,
        requirements: { agility: 8, level: 2 },
    },
    {
        name: "Comprehension",
        description:
            "After you use the bonus gained from reading a magazine, roll 1D. If you roll an Effect, you may use that bonus one additional time.",
        ranks: 1,
        requirements: { intelligence: 6 },
    },
    {
        name: "Concentrated Fire",
        description:
            "When you make a ranged attack with a weapon that has a Fire Rate of 1 or 2, you can choose to attack a specific hit location without increasing the difficulty of the attack.",
        ranks: 1,
        requirements: { perception: 8 },
    },
    {
        name: "Chem Resistant",
        description:
            "At rank 1, roll one fewer dice when determining if you become addicted to chems, to a minimum of 0.",
        ranks: 2,
        requirements: { endurance: 7, level: 1 },
    },
    {
        name: "Chemist",
        description:
            "Chems you create last twice as long as normal. In addition, you unlock chems recipes that have this perk as a requirement.",
        ranks: 1,
        requirements: { intelligence: 7 },
    },
    {
        name: "Demolition Expert",
        description:
            "When you make an attack using a weapon with the Blast quality, the attack gains the Vicious damage effect. In addition, you unlock explosives recipes which have this perk as a requirement.",
        ranks: 1,
        requirements: { perception: 6, luck: 6 },
    },
    {
        name: "Dodger",
        description:
            "At rank 1, when you take the Defend major action, you reduce the difficulty of the skill test by 1. At rank 2, the AP cost to further increase your Defense is reduced to 1 AP.",
        ranks: 2,
        requirements: { agility: 6, level: 4 },
    },
    {
        name: "Dogmeat",
        description:
            "You aren't alone in the wilderness. You have a pet dog that serves as a friend and ally in dangerous times.",
        ranks: 1,
        requirements: { charisma: 5 },
    },
    {
        name: "Entomologist",
        description:
            "When you make an attack against an NPC with the Insect keyword, your attack gains the Piercing 1 damage effect, or improves the rating of any Piercing X effect the weapon has by +1.",
        ranks: 1,
        requirements: { intelligence: 7 },
    },
    {
        name: "Fast Metabolism",
        description:
            "When you regain one or more HP from any source other than rest, increase the total HP regained by +1 per rank in this perk.",
        ranks: 3,
        requirements: { endurance: 6, level: 1, robot: false },
    },
    {
        name: "Faster Healing",
        description:
            "When you make an END + Survival test to heal your own injuries, the first additional d20 you buy is free. The normal maximum of 5d20 still applies.",
        ranks: 1,
        requirements: { endurance: 6, robot: false },
    },
    {
        name: "Finesse",
        description:
            "Once per combat encounter, you may re-roll all the dice on a single damage roll without spending any Luck points.",
        ranks: 1,
        requirements: { agility: 9 },
    },
    {
        name: "Fortune Finder",
        description:
            "Whenever you roll to determine how much money you find, you find more. At rank 1, you find +30 additional caps. At rank 2, you find +60 additional caps. At rank 3, you find +100 additional caps.",
        ranks: 3,
        requirements: { luck: 5, level: 2 },
    },
    {
        name: "Ghost",
        description:
            "Whenever you attempt an AGI + Sneak test in shadows or darkness, the first additional d20 you buy is free. The normal maximum of 5d20 still applies.",
        ranks: 1,
        requirements: { perception: 5, agility: 6 },
    },
    {
        name: "Grim Reaper's Sprint",
        description:
            "When you make an attack which kills one or more enemies, roll 1D. If you roll an Effect, add 2 AP to the group's pool.",
        ranks: 1,
        requirements: { luck: 8 },
    },
    {
        name: "Gun Fu",
        description:
            "When you succeed at a ranged attack, you may spend 1 AP and 1 ammo to hit a second target within Close range of your initial target. The second target takes the same damage as the initial target. At rank 2, you may spend 2 AP and 2 ammo to hit two additional targets. At rank 3, you may spend 3 AP and 3 ammo to hit three additional targets.",
        ranks: 3,
        requirements: { agility: 10, level: 1 },
    },
    {
        name: "Gun Nut",
        description:
            "You can modify small guns and heavy weapons with weapon mods. Each rank in this perk unlocks an additional rank of weapon mods: rank 1 unlocks rank 1 mods, rank 2 unlocks rank 2 mods, etc.",
        ranks: 4,
        requirements: { intelligence: 6, level: 2 },
    },
    {
        name: "Gunslinger",
        description:
            "When you make an attack with a one-handed ranged weapon with a Fire Rate of 2 or lower, you increase the weapon's damage by +1D per rank. In addition, you may re-roll the hit location die.",
        ranks: 2,
        requirements: { agility: 7, level: 2 },
    },
    {
        name: "Hacker",
        description:
            "The difficulty of skill tests to hack computers is decreased by 1, to a minimum of 0.",
        ranks: 1,
        requirements: { intelligence: 8 },
    },
    {
        name: "Healer",
        description:
            "When you heal a patient's HP using the First Aid action, increase the amount of HP healed by +1 per rank in this perk.",
        ranks: 3,
        requirements: { intelligence: 7, level: 1 },
    },
    {
        name: "Heave Ho!",
        description:
            "When you make a thrown weapon attack, you may spend 1 AP to increase the Range of the weapon by one step-from Close to Medium, or from Medium to Long.",
        ranks: 1,
        requirements: { strength: 8 },
    },
    {
        name: "Hunter",
        description:
            "When you make an attack against an NPC with one of the Mammal, Lizard, or Insect keywords and the Mutated keyword, your attack gains the Vicious damage effect, if it did not already have that effect.",
        ranks: 1,
        requirements: { endurance: 6 },
    },
    {
        name: "Infiltrator",
        description:
            "When you attempt a Lockpick skill test to unlock a door or container, you may re-roll 1d20.",
        ranks: 1,
        requirements: { perception: 8 },
    },
    {
        name: "Inspirational",
        description:
            "Because you lead by example, the maximum number of AP the group may save is increased by 1.",
        ranks: 1,
        requirements: { charisma: 8 },
    },
    {
        name: "Intense Training",
        description:
            "Increase any one S.P.E.C.I.A.L attribute by 1 rank. As usual, your S.P.E.C.I.A.L attributes cannot be increased beyond 10 using this method.",
        ranks: 10,
        requirements: { level: 2 },
    },
    {
        name: "Iron Fist",
        description:
            "At rank 1, your unarmed attacks inflict +1D damage. At rank 2, your unarmed attacks also gain the Vicious damage effect.",
        ranks: 2,
        requirements: { strength: 6, level: 1 },
    },
    {
        name: "Junktown Jerky Vendor",
        description:
            "The difficulty of any CHA + Barter test you attempt to buy or sell goods is reduced by 1, to a minimum of 0.",
        ranks: 1,
        requirements: { charisma: 8 },
    },
    {
        name: "Jury Rigging",
        description:
            "You can repair an item without needing to expend any components. However, the repair is temporary, and the item will break again on the next complication you suffer while using it. The complication range of all skill tests to use the item increases by 1, to the roll of a 19-20.",
        ranks: 1,
        requirements: {},
    },
    {
        name: "Laser Commander",
        description:
            "When you make an attack with a ranged energy weapon, the damage is increased by +1D per rank in this perk.",
        ranks: 2,
        requirements: { perception: 8, level: 2 },
    },
    {
        name: "Lead Belly",
        description:
            "At rank 1, you may re-roll the dice to determine if you suffer radiation damage from irradiated food or drink. At rank 2, you are immune to radiation damage from consuming irradiated food or drink.",
        ranks: 2,
        requirements: { endurance: 6, level: 1 },
    },
    {
        name: "Life Giver",
        description:
            "Increase your maximum health points by your Endurance rank.",
        ranks: 5,
        requirements: { level: 5 },
    },
    {
        name: "Light Step",
        description:
            "When you roll to generate any complications on an Agility-based skill test, you may ignore one complication for every 1 AP spent. In addition, you may re-roll 1d20 on any AGI + Athletics test to avoid traps triggered by pressure plates or similar mechanisms.",
        ranks: 1,
        requirements: {},
    },
    {
        name: "Master Thief",
        description:
            "When you are attempting to pick a lock or pickpocket somebody, the difficulty of the opponent's skill test to detect you increases by +1.",
        ranks: 1,
        requirements: { perception: 8, agility: 9 },
    },
    {
        name: "Medic",
        description:
            "When you use the First Aid action to try to treat an injury, you can re-roll 1d20.",
        ranks: 1,
        requirements: { intelligence: 8 },
    },
    {
        name: "Meltdown",
        description:
            "When you kill an enemy with an energy weapon, they explode. Roll a number of dice equal to half the weapon's damage rating (round down). For each Effect rolled, one creature within Close range of the exploding enemy (starting with the closest) suffers energy damage equal to the total rolled on the dice.",
        ranks: 1,
        requirements: { perception: 10 },
    },
    {
        name: "Mister Sandman",
        description:
            "When you make a sneak attack with a silenced or suppressed weapon, the damage is increased by +2D. You cannot gain this benefit while in Power Armor.",
        ranks: 1,
        requirements: { agility: 9 },
    },
    {
        name: "Moving Target",
        description:
            "When you take the Sprint action, your Defense increases by +1 until the start of your next turn.",
        ranks: 1,
        requirements: { agility: 6 },
    },
    {
        name: "Mysterious Stranger",
        description:
            "From time to time, a Mysterious Stranger comes to your aid, with lethal results. At the start of a combat encounter, you may spend 1 Luck point. If you do so, then at any point during the scene, the GM may have the Mysterious Stranger appear, make a single ranged attack against an enemy you attacked, or who just attacked you, and then vanish. If you spend a Luck point and the Mysterious Stranger does not appear, the GM must refund the Luck point you spent.",
        ranks: 1,
        requirements: { luck: 7 },
    },
    {
        name: "Nerd Rage!",
        description:
            "While your health is reduced to less than 1/4 of your maximum, you add +1 to your physical DR, +1 to your energy DR, and +1 to the damage of all your attacks. At rank 2, this increases to +2 DR, and +2 damage. At rank 3, this increases to +3 DR and +3 damage.",
        ranks: 3,
        requirements: { intelligence: 8, level: 2 },
    },
    {
        name: "Night Person",
        description:
            "You reduce any difficulty increases due to darkness by 1.",
        ranks: 1,
        requirements: { perception: 7 },
    },
    {
        name: "Ninja",
        description:
            "When you make a sneak attack with a melee weapon or unarmed attack, the damage is increased by +2D. You cannot gain this benefit while in Power Armor.",
        ranks: 1,
        requirements: { agility: 8 },
    },
    {
        name: "Nuclear Physicist",
        description:
            "Whenever you use a weapon that inflicts radiation damage, or has the Radioactive damage effect, each Effect you roll inflicts one additional point of radiation damage. In addition, fusion cores you use have 3 additional charges.",
        ranks: 1,
        requirements: { intelligence: 9 },
    },
    {
        name: "Pain Train",
        description:
            "You may Charge as a major action if you are wearing Power Armor or are a super mutant. This is a movement action, and you may not Move or Sprint in the same turn. When you take this action, you move into reach of an enemy within Medium range (1 zone) and make a STR + Athletics test with a difficulty of 2. If you succeed, the enemy suffers damage equal to your normal unarmed damage, and is knocked prone. At rank 2, you add +1D and the Stun damage effect to the damage inflicted. At the GM's discretion, especially large or sturdy creatures cannot be knocked prone by this action.",
        ranks: 2,
        requirements: { strength: 9, endurance: 7, level: 1 },
    },
    {
        name: "Paralyzing Palm",
        description:
            "When you make an unarmed attack, and choose to strike a specific location, your attack gains the Stun damage effect.",
        ranks: 1,
        requirements: { strength: 8 },
    },
    {
        name: "Party Boy/Party Girl",
        description:
            "You cannot become addicted to alcoholic drinks, and whenever you drink an alcoholic drink, you heal +2 HP.",
        ranks: 1,
        requirements: { endurance: 6, charisma: 7 },
    },
    {
        name: "Pathfinder",
        description:
            "When travelling over long distances through the wilderness, a successful PER + Survival test (with a difficulty determined by the GM, based on the terrain) reduces the travel time by half.",
        ranks: 1,
        requirements: { perception: 6, endurance: 6 },
    },
    {
        name: "Pharma Farma",
        description:
            "When you are scavenging a location that contains medicine or chems, you find one additional item, randomly determined, without spending AP.",
        ranks: 1,
        requirements: { luck: 6 },
    },
    {
        name: "Pickpocket",
        description:
            "At rank 1, you can ignore the first complication you roll when you make an AGI + Sneak test to steal an object from someone else's person or to plant something on them. At rank 2, you can re-roll 1d20 in your dice pool when attempting to pick someone's pocket. At rank 3, you reduce the difficulty of attempts to pick someone's pocket by 1.",
        ranks: 3,
        requirements: { perception: 8, agility: 8, level: 1 },
    },
    {
        name: "Piercing Strike",
        description:
            "Your attacks using unarmed attacks and bladed melee weapons gain the Piercing 1 damage effect, or add +1 to the rating of any Piercing X damage effect they already had.",
        ranks: 1,
        requirements: { strength: 7 },
    },
    {
        name: "Pyromaniac",
        description:
            "The damage you deal using fire-based weapons increases by +1D per rank.",
        ranks: 3,
        requirements: { endurance: 6, level: 2 },
    },
    {
        name: "Quick Draw",
        description:
            "Each turn, you may draw a single weapon or item carried on your person without using a minor action.",
        ranks: 1,
        requirements: { agility: 6 },
    },
    {
        name: "Quick Hands",
        description:
            "You can reload firearms faster. When you make a ranged attack, you may spend 2 AP to double the Fire Rate of your gun for that attack.",
        ranks: 1,
        requirements: { agility: 8 },
    },
    {
        name: "Rad Resistance",
        description:
            "Your radiation Damage Resistance, to all hit locations, increases by +1 per rank in this perk.",
        ranks: 2,
        requirements: { endurance: 8, level: 1 },
    },
    {
        name: "Refractor",
        description:
            "Your energy Damage Resistance to all hit locations increases by +1 per rank in this perk.",
        ranks: 2,
        requirements: { perception: 6, luck: 7, level: 1 },
    },
    {
        name: "Ricochet",
        description:
            "If an enemy makes a ranged attack against you and rolls a complication, you may spend one Luck point to have their ricochet hit them. Resolve the damage roll against the attacking enemy instead.",
        ranks: 1,
        requirements: { luck: 10, level: 5 },
    },
    {
        name: "Rifleman",
        description:
            "When you make a ranged attack with any two-handed weapon with a Fire Rate of 2 or lower (except heavy weapons), you add +1D to the weapon's damage per rank. At rank 2, you also add the Piercing 1 damage effect, or add +1 to the rating of any Piercing X damage effect the weapon already had.",
        ranks: 2,
        requirements: { agility: 7, level: 2 },
    },
    {
        name: "Robotics Expert",
        description:
            "At rank 1, you can modify robot armor, weapon mounts, and modules with rank 1 mods. At rank 2 you gain access to rank 2 mods, and the difficulty of tests to repair robots is permanently reduced by 1. At rank 3 you gain access to rank 3 mods, and you can reprogram robots to fulfil a different function or alter their behavior at the discretion of the GM.",
        ranks: 3,
        requirements: { intelligence: 8, level: 2 },
    },
    {
        name: "Science!",
        description:
            "You can modify energy weapons with weapon mods, and you can also craft certain advanced armor mods. Each rank in this perk unlocks an additional rank of mods: rank 1 unlocks rank 1 mods, rank 2 unlocks rank 2 mods, etc.",
        ranks: 3,
        requirements: { intelligence: 6, level: 2 },
    },
    {
        name: "Scoundrel",
        description:
            "When you make a CHA + Speech test to convince someone of a lie, you may ignore the first complication you roll.",
        ranks: 1,
        requirements: { charisma: 7 },
    },
    {
        name: "Scrapper",
        description:
            "When you scrap an item, you can salvage uncommon component materials as well as common ones. At rank 2, you can also salvage rare materials.",
        ranks: 2,
        requirements: { level: 3 },
    },
    {
        name: "Scrounger",
        description:
            "Whenever you roll to determine how much ammunition you find, you find more. At rank 1, you find +3 additional shots. At rank 2, you find +6 additional shots. At rank 3, you find +10 additional shots. The additional ammo you find is the same as initially found, for example, if you find 10mm ammunition, this perk increases how much 10mm ammo you find. If you find multiple types of ammunition, Scrounger applies to the ammunition with the lowest rarity (GM's choice if there is a tie).",
        ranks: 3,
        requirements: { luck: 6, level: 1 },
    },
    {
        name: "Shotgun Surgeon",
        description:
            "Your ranged attacks using shotguns gain the Piercing 1 damage effect, or add +1 to any Piercing X damage effect the weapon already had.",
        ranks: 1,
        requirements: { strength: 5, agility: 7 },
    },
    {
        name: "Skilled",
        description:
            "Add +1 rank to two skills or add +2 ranks to one skill. No skill may have more than 6 ranks.",
        ranks: 10,
        requirements: { level: 3 },
    },
    {
        name: "Size Matters",
        description:
            "When you make a ranged attack with any heavy weapon, you add +1D to the weapon's damage, per rank.",
        ranks: 3,
        requirements: { endurance: 7, agility: 6 },
    },
    {
        name: "Slayer",
        description:
            "When you inflict any damage with an unarmed attack or melee weapon, you may spend 1 Luck point to immediately inflict a critical hit-and therefore an injury-on the location hit.",
        ranks: 1,
        requirements: { strength: 8 },
    },
    {
        name: "Smooth Talker",
        description:
            "When you make a Barter or Speech test as part of an opposed test, you may re-roll 1d20.",
        ranks: 1,
        requirements: { charisma: 6 },
    },
    {
        name: "Snake Eater",
        description: "Your poison Damage Resistance increases by +2.",
        ranks: 1,
        requirements: { endurance: 7 },
    },
    {
        name: "Sniper",
        description:
            "When you take the Aim minor action, and then make a ranged attack with a two-handed weapon with the Accurate quality, you can specify a hit location to target without increasing the difficulty of the attack.",
        ranks: 1,
        requirements: { perception: 8, agility: 6 },
    },
    {
        name: "Solar Powered",
        description:
            "During the day, you gain a +2 bonus to Radiation and Poison Resistance. At night, this bonus is reduced to +1.",
        ranks: 1,
        requirements: { endurance: 8 },
    },
    {
        name: "Steady Aim",
        description:
            "When you take the Aim minor action, you may either re-roll 2d20 on the first attack you make this turn, or re-roll 1d20 on all attacks you make this turn.",
        ranks: 1,
        requirements: { strength: 8, agility: 7 },
    },
    {
        name: "Strong Back",
        description:
            "Your maximum carry weight is increased by +25 lbs., per rank.",
        ranks: 3,
        requirements: { strength: 5, level: 1 },
    },
    {
        name: "Tag!",
        description:
            "You may select one additional Tag skill. Increase the skill's rank by 2, to a maximum of 6, and mark it as a Tag skill, allowing you to roll a critical success with a d20 result equal or under the skill's rank.",
        ranks: 1,
        requirements: { level: 5 },
    },
    {
        name: "Terrifying Presence",
        description:
            "When you make a Speech test to threaten or scare someone, you may re-roll 1d20. At rank 2, you may use a major action in combat to threaten an enemy within Medium range, using a STR + Speech test with a difficulty of 2. If you succeed, that enemy must move away from you during their next turn (though they can take any other actions they wish).",
        ranks: 2,
        requirements: { strength: 6, charisma: 8, level: 3 },
    },
    {
        name: "Toughness",
        description:
            "Your physical Damage Resistance to all hit locations increases by +1 per rank in this perk.",
        ranks: 2,
        requirements: { endurance: 6, luck: 6, level: 1 },
    },
];

export default perks;
