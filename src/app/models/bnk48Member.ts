export interface FirstName {
    th: string;
    en: string;
}

export interface LastName {
    th: string;
    en: string;
}

export interface Nickname {
    th: string;
    en: string;
}

export interface FoodAllergies {
    th: string;
    en: string;
}

export interface FavouriteFoods {
    th: string;
    en: string;
}

export interface DislikeFoods {
    th: string;
    en: string;
}

export interface FavouriteGames {
    th: string;
    en: string;
}

export interface Likes {
    th: string;
    en: string;
}

export interface Dislikes {
    th: string;
    en: string;
}

export interface Hobbies {
    th: string;
    en: string;
}

export interface FavouriteSchoolSubjects {
    th: string;
    en: string;
}

export interface DislikeSchoolSubjects {
    th: string;
    en: string;
}

export interface Bio {
    food_allergies: FoodAllergies;
    favourite_foods: FavouriteFoods;
    dislike_foods: DislikeFoods;
    favourite_games: FavouriteGames;
    likes: Likes;
    dislikes: Dislikes;
    hobbies: Hobbies;
    favourite_school_subjects: FavouriteSchoolSubjects;
    dislike_school_subjects: DislikeSchoolSubjects;
}

export interface Member {
    id: number;
    slug: string;
    created: any;
    changed: any;
    first_name: FirstName;
    last_name: LastName;
    nickname: Nickname;
    position: number;
    team: number;
    birth_date: any;
    height: number;
    province: string;
    bio: Bio;
    blood_group: number;
    instagram: string;
    avatar_image: string;
    profile_image: string;
    avatar_image_2x: string;
    profile_image_2x: string;
    status: number;
}

export interface BNK48 {
    members: Member[];
    current_page: number;
    total_page: number;
}



