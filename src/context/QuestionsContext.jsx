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
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  useEffect(function () {
    async function fetchQuestions() {
      try {
        setIsLoading(true);
        setActive(false);
        const res = await fetch(`${Base_Url}/questions`);
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        setError("theres a problem loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuestions();
  }, []);
  function onClick() {
    setActive(true);
  }
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        isLoading,
        active,
        error,
        onClick,
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
