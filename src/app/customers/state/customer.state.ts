import { Customer } from "../customer.model"

export interface CustomerState {
    customers: Customer[]
    loading: boolean
    loaded: boolean
    error: string
}

export const initialState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ""
}