import "./app.scss";
import AnotherNews from "./containers/anotherNews/anotherNews";
import Header from "./components/header/header";
import Hero from "./containers/hero/hero";

const App = () => {
  return (
    <main className='App'>
      <Header />
      <Hero />
      <AnotherNews />
    </main>
  );
};

export default App;
