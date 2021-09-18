import axios from "axios";

const endpoint = "http://localhost:8000/";

export const getDepartments = () => {
  return async (dispatch) => {
    try {
      const dataArray = await axios.get(endpoint + "main-api/departments");
      dispatch({
        type: "getDepartments",
        payload: dataArray,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getQuestions = () => {
  return async (dispatch) => {
    try {
      await axios.get(endpoint + "exam-api/CreateQuestions");
      const dataArray = await axios.get(endpoint + "exam-api/GetQuestions");
      dispatch({
        type: "getQuestions",
        payload: dataArray,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
