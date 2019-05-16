import {SAVE_COUPONS} from "../Const";

const INITIAL_STATE = {
    data: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_COUPONS:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};