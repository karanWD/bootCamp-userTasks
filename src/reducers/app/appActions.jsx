import {appActionTypes} from "./appActionTypes";

export const deleteAction = (id)=> ({
    type:appActionTypes.DELETE_TYPE,
    payload:id
})