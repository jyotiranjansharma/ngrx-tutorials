
import { createReducer, on } from "@ngrx/store";
import { initialState } from "./customer.state";
import { loadCustomers, loadCustomersSuccess } from "./customer.action";

const _customerReducer = createReducer(
    initialState,
    on(loadCustomers, (state) => {
        return {
            ...state,
            loading: true,
        }
    }),
    on(loadCustomersSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            customers: []
        }
    })
)

export function customerReducer(state: any, action: any) {
    return _customerReducer(state, action)
}

// export function customerReducer(state = initialState, action: { type: any; }) {
//     switch(action.type) {
//         case "LOAD_CUSTOMER": {
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false
//             };
//         }

//         default: {
//             return state
//         }
//     }
// }