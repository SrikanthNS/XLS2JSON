import * as actionTypes from '../constants/action-types';

const initialState = {
   uploadedXL: {}
};

function uploadReducer(state = initialState, action) {
    console.group("action at uploadReducer");
    console.log(action);
    console.groupEnd("action at uploadReducer");
    switch (action.type) {
        case actionTypes.SAVE_UPLOADED_XLSX: {
            return {
                ...state,
                uploadedXL: action.uploadedXLSX,
            };
        }
        default: return state;
    }
}
export default uploadReducer;
