import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  console.log("App is rendered");
  let tabContent = <p>Please select a topic</p>;
  if(selectedTopic){
    tabContent = (
          <Examples topic={selectedTopic} />
        );
  }

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onClick={()=>handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={()=>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={()=>handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
