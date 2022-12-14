import Header from "./compoments/Header";
import Main from "./compoments/Main";
import UseProvider from "./contexts/UseProvider";

const App = () => { 
  return (
    <UseProvider>
      <div>
        <Header />
        <Main />
      </div>
    </UseProvider>
  );
}

export default App;
