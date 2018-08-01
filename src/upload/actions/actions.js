import * as actionTypes from '../constants/action-types';

function saveUploadedXLSX(uploadedXLSX) {
    console.group("uploadedXLSX at saveUploadedXLSX action");
    console.log(uploadedXLSX)
    console.groupEnd("uploadedXLSX at saveUploadedXLSX action");
    return {
        type: actionTypes.SAVE_UPLOADED_XLSX,
        uploadedXLSX,
    };
}


export {
    saveUploadedXLSX,
};
