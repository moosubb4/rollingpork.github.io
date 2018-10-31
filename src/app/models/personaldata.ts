export interface Language {
    Language: string;
    level: string;
}

export interface Contact {
    tel: string;
    email: string;
}

export interface Pic {
    path: string;
    width?: number;
    cropping?: number[];
}

export interface PersonalData {
    name: string;
    surname: string;
    birthDate: string;
    age: number;
    Personality: string[];
    Religion: string;
    Nationality: string;
    Height: number;
    weight: number;
    Language: Language[];
    contact: Contact;
    pic: Pic;
}


