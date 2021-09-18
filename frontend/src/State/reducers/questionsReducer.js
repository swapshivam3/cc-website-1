 const reducer = (state = [], action) => {
    switch (action.type) {
        case "getQuestions":
            return action.payload;
        default:
            return state;
     }
}

export default reducer;