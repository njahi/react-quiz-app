import { useQuestions } from "../context/QuestionsContext";

export default function Question() {
  const { questions } = useQuestions();
  return (
    <div>
      {questions.map((qtn) => (
        <div key={qtn.id}>
          <h4>{qtn.question}</h4>
        </div>
      ))}
    </div>
  );
}
