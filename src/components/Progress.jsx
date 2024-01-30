import { useQuestions } from "../context/QuestionsContextReducer";

export default function Progress() {
  const { index, answer, numQuestions, points } = useQuestions();
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question<strong>{index + 1}</strong>
      </p>
      / {numQuestions}
      <p>{points}</p>
    </header>
  );
}
