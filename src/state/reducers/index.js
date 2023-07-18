import {combineReducers} from 'redux';
import amountReducer from './amountReducer';

// for exporting all the reducers into one

 const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;