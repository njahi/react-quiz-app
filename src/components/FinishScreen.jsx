import { useQuestions } from "../context/QuestionsContextReducer";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuestions();
  const percentage = (points / maxPossiblePoints) * 100;
  return null;
}
