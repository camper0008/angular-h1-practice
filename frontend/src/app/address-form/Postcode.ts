export interface Postcode {
    href: string
    nr: string
    navn: string
    kommuner: Municipality[]
}

export interface Municipality {
    href: string
    kode: string
    navn: string
}
