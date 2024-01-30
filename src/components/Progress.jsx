import { useQuestions } from "../context/QuestionsContext";

export default function Progress() {
  const { questions } = useQuestions();
  const index = questions.index;
  return (
    <header className='progress'>
      <progress
        max={questions.length}
        value={index + Number(questions.answer !== null)}
      />
      <p>
        Question<strong>{}</strong>
      </p>{" "}
      / {questions.length}
      <p>{questions.points}</p>
    </header>
  );
}
