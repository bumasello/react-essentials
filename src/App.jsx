import Header from "./components/Header/Header.jsx";
import CoreConceptMain from "./components/CoreConcept/CoreConceptMain.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptMain />
        <Examples />
      </main>
    </>
  );
}

export default App;
