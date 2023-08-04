import './App.css';
import Tooltip from './components/Tooltip'

function App() {
  return (
    <div className="App">
      <h1>Tooltip</h1>
      <br/>
      <Tooltip  triggerText="Hover over me"    tooltipFontWeightStyle="tooltip-font-weight" toolTriggerFontSize="tooltip-font-size"/> 
      <br/> 
      <br/> 
      <Tooltip triggerText="Hover over me to see another tooltip"/>
    </div>
  );
}

export default App;

