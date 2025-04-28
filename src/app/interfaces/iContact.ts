export interface iContact {
    id?: string
    name: string
    contact_type: string
    contact: string
    avatar: string
    tally: number
    frequency?: string
    last_contacted: number | Date
}