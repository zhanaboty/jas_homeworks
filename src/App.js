import './Styles/App.css';
import FirstTable from './Components/FirstTable';
import SecondTable from './Components/SecondTable';
import Input from './Components/Input'


export default function App() {
  return (
    <div className="App">
      <FirstTable/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SecondTable/>
      <Input/>
    </div>
  );
}

