import Main from "./Containers/main";
import React, {useState, useEffect} from 'react'
import Loader from "./Components/Loader/Loader";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './State/action-creators/index';

function App() {
  
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const { getDepartments, getQuestions } = bindActionCreators(actionCreators, dispatch);
  
  useEffect(() => {
    getDepartments();
    getQuestions();
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  });

  return (
    <div>
    {completed ? <Main /> : <Loader />}
    </div>
  );
}
export default App;
