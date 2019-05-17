import {
    CHANGE_COUPONS_LIST,
    SAVE_COUPON,
} from "../Const";

const INITIAL_STATE = {
    data: [],
    myCoupons: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_COUPONS_LIST:
            return {
                ...state,
                data: action.payload,
            };

        case SAVE_COUPON:
            let currentData = [...state.data];
            let obj = currentData.findIndex(status => status.id === action.payload.id);
            currentData[obj].active ? currentData[obj].active = false : currentData[obj].active = true;
            return {
                ...state,
                myCoupons: currentData.filter(el => {return el.active}),
                data: currentData,
            };

        default:
            return state;
    }
};