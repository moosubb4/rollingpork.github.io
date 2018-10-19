export interface Defense {
    base: number;
    max: number;
    augmented: number;
}

export interface Resistances {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;
}

export interface Attributes {
    requiredGender: string;
}

export interface Slot {
    rank: number;
}

export interface Modifiers {
    health?: number;
    attack?: number;
    resistFire?: number;
    affinity?: number;
    resistWater?: number;
    defense?: number;
    damageWater?: number;
    resistIce?: number;
    damageThunder?: number;
    resistThunder?: number;
    sharpnessBonus?: number;
    damageFire?: number;
    damageIce?: number;
}

export interface Skill {
    id: number;
    slug: string;
    level: number;
    description: string;
    modifiers: Modifiers;
    skill: number;
    skillName: string;
}

export interface ArmorSet {
    id: number;
    name: string;
    rank: string;
    pieces: number[];
}

export interface Assets {
    imageMale: string;
    imageFemale: string;
}

export interface Item {
    id: number;
    name: string;
    description: string;
    rarity: number;
    carryLimit: number;
    sellPrice: number;
    buyPrice: number;
}

export interface Material {
    quantity: number;
    item: Item;
}

export interface Crafting {
    materials: Material[];
}

export interface Armor {
    id: number;
    slug: string;
    name: string;
    type: string;
    rank: string;
    rarity: number;
    defense: Defense;
    resistances: Resistances;
    attributes: Attributes;
    slots: Slot[];
    skills: Skill[];
    armorSet: ArmorSet;
    assets: Assets;
    crafting: Crafting;
}

export interface ArmorSets {
    id: number;
    name: string;
    rank: string;
    pieces: Armor[];
    bonus?: any;
}





