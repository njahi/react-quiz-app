import { useQuestions } from "../context/QuestionsContext";

export default function Progress() {
  const { questions } = useQuestions();
  return (
    <header className='progress'>
      <progress />
      <p>
        Question<strong>{}</strong>
      </p>{" "}
      / {questions.length}
      <p>{questions.points}</p>
    </header>
  );
}
