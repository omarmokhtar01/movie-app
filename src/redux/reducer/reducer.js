import { AllMovie } from "../type/movieTypes";
let pageCount = 0;
const initialValue = { movie: [], pageCount }

// 2- create reducer to set and change it
export const reducer = ((state = initialValue, action) => {
    switch (action.type) {
        case AllMovie:
            return { movie: action.data, pages: action.pages }
        default:
            return state
    }
})