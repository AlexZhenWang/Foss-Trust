import { AnyAction } from "redux";
import actions from "../actions";

const grantorReducer = (state = null, action: AnyAction ) => {
    switch (action.type) {
        case actions.SET_GRANTOR_ADDRESS:
            return action.payload;
        default:
            return state;
    }
}

export default grantorReducer;