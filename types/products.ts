type Location  = {
    country: string;
    city: string;
    latitude: number;
    longitude: number;
}
export interface Products {
    company: Array<string>,
    id: string,
    name: string,
    location: Location,
    source: string
}   