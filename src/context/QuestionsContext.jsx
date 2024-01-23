/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const QuestionsContext = createContext();
const Base_Url = "http://localhost:8000";
function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  useEffect(function () {
    async function fetchQuestions() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_Url}/questions`);
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        // setError(<Error />);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        isLoading,
        // error,
      }}>
      {children}
    </QuestionsContext.Provider>
  );
}
function useQuestions() {
  const context = useContext(QuestionsContext);
  if (context === undefined)
    throw new Error("context was used outside the provider");
  return context;
}
export { QuestionsProvider, useQuestions };
