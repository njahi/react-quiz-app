import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useQuestions } from "./context/QuestionsContext";
function App() {
  const { isLoading } = useQuestions();
  return (
    <div className='app'>
      <Header />
      {isLoading === true && <Loader />}
      <Main>{isLoading === false && <StartScreen />}</Main>
    </div>
  );
}

export default App;
