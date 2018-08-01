import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import { routerReducer } from 'react-router-redux';
import { reducer as uploadReducer } from './upload';
const rootReducer = combineReducers({
    uploadedXLSX: uploadReducer,
});

export default rootReducer;
