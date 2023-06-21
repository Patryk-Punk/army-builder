type Stats = {
    M?: string,
    T?: string,
    SV?: string,
    W?: string,
    LD?: string,
    OC?: string,
}

type Ability = {
    name:string
    description: string,
    weapon?: Weapon
    keyword?: Keyword
    statModifier?: Stats,
    aura?: boolean,
    armyAbility?: 'CORE' | 'FACTION'
}

type Weapon = {
    profile: {
        name: string,
        weaponsAbilties: Ability[],
        range: number | 'melee',
        A: number,
        BS?: number,
        WS?: number,
        S: number,
        AP: number,
        D: number,
    }[]
}

type Keyword = {
    key: string,
    faction?: string,
}

type Enhancement = {
    name: string,
    description: string,
    cost: number
}

type DataSheet = {
    id: string,
    profiles: {
        name: string,
        stats: Stats,
    }[],
    rangedWeapons: {
        default: boolean,
        weapon: Weapon
    }[],
    meleeWeapons: {
        default: boolean,
        weapon: Weapon
    }[],
    abilities: {
        ability: Ability,
        default?: boolean
    }[],
    wargearAbilties: {
        ability: Ability,
        default: boolean
    }[],
    unitSize: number,
    cost: number,
    keywords: Keyword[],
    supremeCommander: boolean,
    invulnerableSave?: string,
    warlordOption?: boolean,
    leader?: {
        leadableUnits: DataSheet[]
    }
    embeddedUnit?: {
        unit: DataSheet,
    }
}

type Army = {
    name: string,
    faction: string,
    subfaction: string,
    dataSheets: {
        warlord: {
            unit: DataSheet,
            enhancement?: Enhancement
        },
        characters: DataSheet[],
        Units: DataSheet[]
    },
    totalCost: number,
}

export { Army, DataSheet, Weapon, Ability, Keyword }