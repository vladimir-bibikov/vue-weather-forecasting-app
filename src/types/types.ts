export interface ICity {
    id: number,
    name: string,
    country: string,
    temp: number,
    feels_like: number,
    clouds: string,
    wind: number,
    humidity: number,
    pressure: number,
    visibility: number,
    icon:string,
    city_user?:boolean
}
