/* eslint-disable no-unused-vars */
import { useQuestions } from "../context/QuestionsContextReducer";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuestions();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return null;
}
