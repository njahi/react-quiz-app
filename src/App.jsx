import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useQuestions } from "./context/QuestionsContext";
import Error from "./components/Error";
function App() {
  const { isLoading, error } = useQuestions();
  return (
    <div className='app'>
      <Header />
      {isLoading === true && <Loader />}
      {error && <Error />}
      <Main>{isLoading === false && <StartScreen />}</Main>
    </div>
  );
}

export default App;
