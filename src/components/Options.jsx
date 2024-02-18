/* eslint-disable react/prop-types */
import { memo } from "react";
import { useQuestions } from "../context/QuestionsContextReducer";

const Options = memo(function Options({ question }) {
  const { dispatch, answer } = useQuestions();

  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
});

export default Options;
// imported memo from react and used to to prevent the component from re-rendering when the question prop value does not change
