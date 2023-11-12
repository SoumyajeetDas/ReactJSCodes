export interface Game {
    _id?: string
    name:string,
    address:string,
    numberOfPeople:number | null,
    date:Date | string | null,
    time:string,
    fieldNumber:number | null
}


