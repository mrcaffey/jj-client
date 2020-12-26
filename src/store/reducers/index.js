import itemCountReducer from './Cart';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    itemCount: itemCountReducer
});

export default rootReducer;