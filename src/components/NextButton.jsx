import { useQuestions } from "../context/QuestionsContextReducer";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuestions();
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return <button className='btn btn-ui'>Next</button>;
  if (index === numQuestions - 1) return <button>Finish</button>;
}
