import { DataSheet, Weapon, Ability, Keyword } from "./army-types";

type Roster = {
    characters: DataSheet[],
    units: DataSheet[],
}

const WARGEAR: { [key: string]: Ability } = {
    'guardian-drone': {
        name: 'Guardian Drone',
        description: 'Each time a model makes a ranged attack that targets the bearer\'s unit, subtract 1 from the Wound roll'
    },
    'gun-drone': {
        name: 'Gun Drone',
        description: 'The bearer is equipped with the following ranged weapon: <b>Twin Pulse carbine</b>',
        weapon: undefined //TODO
    },
    'marker-drone': {
        name: 'Marker Drone',
        description: 'The bearer\'s unit has the <b>Markerlight</b> keyword and can act as an Observer unit for another unit even if it Advanced this turn.',
        keyword: undefined // TODO
    },
    'missle-drone': {
        name: 'Missle Drone',
        description: 'The bearer is equipped with the following ranged weapon: <b> Missile Pod </b>',
        weapon: undefined // TODO
    },
    'shield-drone': {
        name: 'Shield Drone',
        description: 'Add 1 to the bearer\'s Wounds characteristic.',
        statModifier: {
            W: '1'
        }
    },
    'adv-guardian-drone': {
        name: 'Advanced Guardian Drone',
        description: 'Each time a ranged attacktargets the bearer, subtract 1 from the Wound roll'
    },
    'comm-link-drone': {
        name: 'Command-link Drone',
        description: ' While a friendly T\'au Empire unit is within 6" of the bearer, each time you select that unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP.',
        aura: true
    },
}

const ABILITIES: { [key: string]: Ability } =
{
    'deep-strike': {
        name: 'Deep Strike',
        description: 'During the Declare Battle Formations step, if every model in a unit has this ability, you can set it up in Reserves instead of setting it up on the battlefield. If you do, in the Reinforcements step of one of your Movement phases you can set up this unit anywhere on the battlefield that is more than 9" horizontall away from all enemy models.',
        armyAbility: 'CORE'
    },
    'scouts-7': {
        name: 'Scouts 7"',
        description: 'If every model in a unit has this ability, then at the start of the first battle round, before the first turn begins, it can make a Normal move of up to x" as if it were your Movement phase - as can any Dedicated Transport model such a unit starts the battle embarked within (provided only models with this ability are embarked within that Dedicated Transport model). A unit that moves using this ability must end that move more than 9" horizontally away from all enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first.',
        armyAbility: 'CORE'
    },
    'scouts-9': {
        name: 'Scouts 9"',
        description: 'If every model in a unit has this ability, then at the start of the first battle round, before the first turn begins, it can make a Normal move of up to x" as if it were your Movement phase - as can any Dedicated Transport model such a unit starts the battle embarked within (provided only models with this ability are embarked within that Dedicated Transport model). A unit that moves using this ability must end that move more than 9" horizontally away from all enemy models. If both players have units that can do this, the player who is taking the first turn moves their units first.',
        armyAbility: 'CORE'
    },
    'infitrators': {
        name: 'Infitrators',
        description: 'During deployment, if every model in a unit has this ability, then when you set it up, it can be set up anywhere on the battlefield that is more than 9" horizontally away from the enemy deployment zone and all enemy models.',
        armyAbility: 'CORE'
    },
    ';eader': {
        name: 'Leader',
        description: 'During the Declare Battle Formations step, for each Leader in your army, if your army also includes one or more of that Leader\'s Bodyguard units, you can select one of those Bodyguard units. That Leader will then attach to that Bodyguard unit for the duration of the battle and is said to be leading that unit. Each Bodyguard unit can only have one Leader attached to it.',
        armyAbility: 'CORE'
    },
    'lone-operative': {
        name: 'Lone Operative',
        description: 'Unless part of an Attached unit, this unit can only be selected as the target of a ranged attack if the attacking model is within 12".',
        armyAbility: 'CORE'
    },
    'stealth': {
        name: 'Stealth',
        description: 'If every model in a unit has this ability, then each time a ranged attack is made against it, subtract 1 from that attack\'s Hit roll.',
        armyAbility: 'CORE'
    },
    'for-the-greater-good': {
        name: 'For the Greater Good',
        description: 'If your Army Faction is <b>T\'au Empire</b>, then in your Shooting phase units from your army can work in pairs to help each other target specific enemy units. When they do this, one unit is the Observer unit and the other is their Guided unit. The enemy they are targeting is called their Spotted unit.\nEach time you select this unit to shoot, if it is not an Observer unit, it can use this ability. If it does, select one other friendly unit with this ability that is also eligible to shoot (excluding Fortification, Battleshocked and Observer units). Until the end of the phase, this unit is considered a Guided unit, and that friendly unit is considered an Observer unit. Then select one enemy unit that is visible to both your units to be their Spotted unit.\nUntil the end of the phase:\n - Each time a model in a Guided unit makes an attack that targets their Spotted unit, improve the Ballistic Skill characteristic of the attack by 1 and, if their Observer unit has the Markerlight keyword, the attack has the <b>[IGNORES COVER]</b> ability.\n - Each time a model in a Guided unit makes an attack that does not target their Spotted unit, worsen the Ballistic Skill characteristic of the attack by 1.',
        armyAbility: 'FACTION'
    },
    'agile-combatant': {
        name: 'Agile Combatant',
        description: 'This model is eligible to shoot in a turn in which it Fell Back.',
    },
    'hero-of-the-empire': {
        name: 'Hero of the Empire',
        description: 'While a friendly <b>T\'au Empire</b> unit is within 6" of the bearer, each time you select that unit as the target of a Stratagem, roll one D6: on a 5+, you gain 1CP',
        aura: true
    }
}

const WEAPONS: Weapon[] = [
    {
        profile: [
            {
                name: '',
                weaponsAbilties: [],
                range: 0,
                A: 0,
                S: 0,
                AP: 0,
                D: 0
            }
        ]
    },

]

const Roster: Roster = {
    characters: [
        {
            id: 'Commander Shadowsun',
            profiles: [
                {
                    name: 'Commander Shadowsun',
                    stats: {
                        M: '10',
                        T: '4',
                        SV: '3+',
                        W: '6',
                        LD: '6+',
                        OC: '1'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [
                {
                    ability: ABILITIES['lone-operative'],
                },
                {
                    ability: ABILITIES['infiltrators']
                },
                {
                    ability: ABILITIES['stealth']
                },
                {
                    ability: ABILITIES['for-the-greater-good']
                },
                {
                    ability: ABILITIES['agile-combatant']
                },
                {
                    ability: ABILITIES['hero-of-the-empire']
                },
            ],
            wargearAbilties: [
                {
                    ability: WARGEAR['adv-guardian-drone'],
                    default: true
                },
                {
                    ability: WARGEAR['comm-link-drone'],
                    default: true
                }
            ],
            unitSize: 1,
            cost: 140,
            keywords: [],
            supremeCommander: true,
            invulnerableSave: '5+',
            warlordOption: true,
        },
        {
            id: 'Commander Farsight',
            profiles: [{
                name: 'Commander Farsight',
                stats: {
                    M: '10',
                    T: '5',
                    SV: '3+',
                    W: '6',
                    LD: '6+',
                    OC: '2'
                },
            }],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 120,
            keywords: [],
            supremeCommander: false,
            invulnerableSave: '4+',
            warlordOption: true,
        },
        {
            id: 'Darkstrider',
            profiles: [
                {
                    name: 'Darkstrider',
                    stats: {
                        M: '7',
                        T: '3',
                        SV: '4+',
                        W: '3',
                        LD: '7+',
                        OC: '1'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 75,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Commander in Crisis Battlesuit',
            profiles: [
                {
                    name: 'Commander in Crisis Battlesuit',
                    stats: {
                        M: '10',
                        T: '5',
                        SV: '3+',
                        W: '5',
                        LD: '7+',
                        OC: '2'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 110,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Commander in Enforcer Battlesuit',
            profiles: [
                {
                    name: 'Commander in Enforcer Battlesuit',
                    stats: {
                        M: '8',
                        T: '5',
                        SV: '2+',
                        W: '6',
                        LD: '7+',
                        OC: '2'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 120,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Commander in Coldstar Battlesuit',
            profiles: [
                {
                    name: 'Commander in Coldstar Battlesuit',
                    stats: {
                        M: '12',
                        T: '5',
                        SV: '3+',
                        W: '6',
                        LD: '7+',
                        OC: '2'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 125,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Cadre Fireblade',
            profiles: [
                {
                    name: 'Cadre Fireblade',
                    stats: {
                        M: '6',
                        T: '3',
                        SV: '4+',
                        W: '3',
                        LD: '7+',
                        OC: '1'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 50,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Kroot Shaper',
            profiles: [
                {
                    name: 'Kroot Shaper',
                    stats: {
                        M: '7',
                        T: '3',
                        SV: '6+',
                        W: '3',
                        LD: '7+',
                        OC: '1'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 50,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
        {
            id: 'Ethereal',
            profiles: [
                {
                    name: 'Ethereal',
                    stats: {
                        M: '6',
                        T: '3',
                        SV: '5+',
                        W: '3',
                        LD: '6+',
                        OC: '1'
                    },
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 50,
            keywords: [],
            supremeCommander: false,
            invulnerableSave: '5+',
            warlordOption: true,
        },
        {
            id: 'Aun\'Va',
            profiles: [
                {
                    name: 'Aun\'Va',
                    stats: {
                        M: '6',
                        T: '3',
                        SV: '5+',
                        W: '5',
                        LD: '7+',
                        OC: '1'
                    },
                },
                {
                    name: 'Ethereal Guard',
                    stats: {
                        M: '6',
                        T: '3',
                        SV: '5+',
                        W: '2',
                        LD: '7+',
                        OC: '1'
                    }
                }
            ],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 3,
            cost: 65,
            keywords: [],
            supremeCommander: false,
            invulnerableSave: '4+',
            warlordOption: true,
        },
        {
            id: 'Aun\'Shi',
            profiles: [{
                name: 'Aun\'Shi',
                stats: {
                    M: '6',
                    T: '3',
                    SV: '6+',
                    W: '3',
                    LD: '7+',
                    OC: '1'
                },
            }],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 60,
            keywords: [],
            supremeCommander: false,
            invulnerableSave: '4+',
            warlordOption: true,
        },
        {
            id: 'Longstrike',
            profiles: [{
                name: 'Longstrike',
                stats: {
                    M: '10',
                    T: '10',
                    SV: '3+',
                    W: '14',
                    LD: '7+',
                    OC: '3'
                },
            }],
            rangedWeapons: [],
            meleeWeapons: [],
            abilities: [],
            wargearAbilties: [],
            unitSize: 1,
            cost: 170,
            keywords: [],
            supremeCommander: false,
            warlordOption: true,
        },
    ],
    units: []
}