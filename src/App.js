import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <div>
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </div>
    </div>
  );
}

export default App;
