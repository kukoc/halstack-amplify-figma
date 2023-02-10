import logo from './logo.svg';
import './App.css';
import ButtonWithIconOnly from './ui-components/ButtonWithIconOnly';
import ButtonWithIconPrefix from './ui-components/ButtonWithIconPrefix';
import { ButtonWithIconSuffix } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <ButtonWithIconPrefix></ButtonWithIconPrefix>
        <br></br>
        <ButtonWithIconOnly></ButtonWithIconOnly>
        <br></br>
        <ButtonWithIconSuffix></ButtonWithIconSuffix>
      </header>
    </div>
  );
}

export default App;
