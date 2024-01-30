import { useQuestions } from "../context/QuestionsContextReducer";

export default function Progress() {
  const { index, answer, numQuestions, points, maxPossiblePoints } =
    useQuestions();
  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question<strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>{points}</p> / {maxPossiblePoints}
    </header>
  );
}
