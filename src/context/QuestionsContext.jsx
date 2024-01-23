/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { createContext } from "react";

const QuestionsContext = createContext();
function QuestionsProvider({ children }) {
  return <QuestionsContext.Provider>{children}</QuestionsContext.Provider>;
}
function useQuestions() {
  const context = useContext(QuestionsContext);
  if (context === undefined)
    throw new Error("context was used outside the provider");
  return context;
}
export { QuestionsProvider, useQuestions };
