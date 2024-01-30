import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import { useQuestions } from "./context/QuestionsContextReducer";
import Error from "./components/Error";
import Question from "./components/Question";
import Progress from "./components/Progress";
function App() {
  const { status } = useQuestions();
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
