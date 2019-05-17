import {
    CHANGE_COUPONS_LIST,
    SAVE_COUPON,
} from '../Const';

export const changeCouponsList = (data) => {
    return {
        type: CHANGE_COUPONS_LIST,
        payload: data,
    }
};

export const saveCoupons = (coupon) => {
    return {
        type: SAVE_COUPON,
        payload: coupon,
    }
};