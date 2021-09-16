import axios from 'axios';

export const getDepartments = () => {

    return async (dispatch) => {

        try {
            const dataArray = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            dispatch({
            type: "getDepartments",
            payload: dataArray
        })
        } catch (e) {
            console.log(e);
        }
    }
}

export const getQuestions = () => {

    return async (dispatch) => {

        try {
            const dataArray = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            dispatch({
            type: "getQuestions",
            payload: dataArray
        })
        } catch (e) {
            console.log(e);
        }
    }
}