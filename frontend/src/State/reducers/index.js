import { combineReducers } from "redux";
import departmentsReducer from './departmentsReducer';
import questionsReducer from './questionsReducer.js';

const reducers = combineReducers({
    departments: departmentsReducer,
    questions: questionsReducer
});

export default reducers;
