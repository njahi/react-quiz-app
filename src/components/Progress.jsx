import { useQuestions } from "../context/QuestionsContext";

export default function Progress() {
  const { questions } = useQuestions();
  return (
    <header>
      <progress />
      <p>
        Question<strong>{}</strong>
      </p>{" "}
      / {questions.length}
      <p>{questions.points}</p>
    </header>
  );
}
