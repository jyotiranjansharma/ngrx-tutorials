export interface CounterState {
    counter: number,
    channelName: string
}

export const initialState = {
    counter: 4,
    channelName: 'ngRx'
}