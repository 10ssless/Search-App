import { createNewAppError } from "./helpers";
import { ApplicationState } from "./types"

const generateInitialState = () => {
    const initialState: ApplicationState = {
        quotes: {
            loading: "idle",
            data: [],
            error: createNewAppError(),
        },
    }
    return initialState;
}

export default generateInitialState()