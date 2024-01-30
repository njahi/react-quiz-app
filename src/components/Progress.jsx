import { useQuestions } from "../context/QuestionsContext";

export default function Progress() {
  const { questions, index, answer, numQuestions, points } = useQuestions();
  return (
    <header className='progress'>
      <progress
        max={questions.length}
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
