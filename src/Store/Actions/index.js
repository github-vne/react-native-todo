import {SAVE_COUPONS} from '../Const';

export const saveCoupons = (data) => {
    return {
        type: SAVE_COUPONS,
        payload: data,
    }
};
