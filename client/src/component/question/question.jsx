import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/Actions/actions";


export function Questions() {

    const questions = useSelector((state) => state.Questions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return (
    <div className="questions">
        {
            questions && questions.length>0 ? questions.map((q)=><div className="col-lg-12 col-md-12 mb-4"><h1>{q.question}</h1><p>{q.answers}</p></div>):""
        }
      
    </div>
  );
}
