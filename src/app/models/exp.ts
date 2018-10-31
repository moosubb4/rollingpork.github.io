export interface ExpData {
    year?: number;
    until?: number;
    company?: string;
    describe?: string;
    projects?: Projects[];
}

export interface Projects {
    projName: string;
    projTech: string[];
    projDescribe: string;
}
