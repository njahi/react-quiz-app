import { useQuestions } from "../context/QuestionsContext";

function StartScreen() {
  const { questions } = useQuestions();

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button className='btn btn-ui'>lets start</button>
    </div>
  );
}

export default StartScreen;
