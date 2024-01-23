import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import { useQuestions } from "./context/QuestionsContext";
function App() {
  const { isLoading } = useQuestions();
  return (
    <div className='app'>
      <Header />
      <Main>{isLoading === false && <StartScreen />}</Main>
    </div>
  );
}

export default App;
