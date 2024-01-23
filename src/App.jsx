import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
function App() {
  return (
    <div className='app'>
      <Header />
      <Main>
        <StartScreen />
      </Main>
    </div>
  );
}

export default App;
