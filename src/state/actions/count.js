import { COUNT } from "../types"

export const addCount = () => {
    return {
        type: COUNT.ADD_COUNT,
    }
}