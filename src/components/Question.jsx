import { useQuestions } from "../context/QuestionsContextReducer";
import Options from "./Options";

export default function Question() {
  const { questions } = useQuestions();
  return (
    <div>
      {questions.map((qtn) => (
        <div key={qtn.id}>
          <h4>{qtn.question}</h4>
          <Options
            question={qtn}
            id={qtn.id}
          />
        </div>
      ))}
    </div>
  );
}
