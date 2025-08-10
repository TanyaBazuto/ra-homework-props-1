import './App.css'
import { Stars } from './Stars';

const App = () => {
  return (
    <div>
      <Stars count={1}/>
      <Stars count={5}/>
      <Stars count={2}/>
      <Stars count={0}/>
    </div>
  );
};

export default App
