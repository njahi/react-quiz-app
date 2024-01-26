import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useQuestions } from "./context/QuestionsContext";
import Error from "./components/Error";
import Question from "./components/Question";
function App() {
  const { isLoading, error, active } = useQuestions();
  return (
    <div className='app'>
      <Header />
      {isLoading === true && <Loader />}
      {error && <Error />}
      <Main>
        {isLoading === false && !error ? <StartScreen /> : ""}
        {active === true && <Question />}
      </Main>
    </div>
  );
}

export default App;
