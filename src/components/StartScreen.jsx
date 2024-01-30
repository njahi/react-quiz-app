import { useQuestions } from "../context/QuestionsContextReducer";

function StartScreen() {
  const { numQuestions, dispatch } = useQuestions();

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className='btn btn-ui'>
        lets start
      </button>
    </div>
  );
}

export default StartScreen;
