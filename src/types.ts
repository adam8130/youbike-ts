export type Data = {
    sno: string
    sna: string
    tot: number,
    sbi: number,
    sarea: string
    bemp: number,
    [props: string]: any
}

export type AreaItem = {
    sarea: string, 
    checked: boolean 
}

export type CityItem = {
    city: string,
    url: string
}