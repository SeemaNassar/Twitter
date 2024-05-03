import { LeftSide } from './components';
import { Home } from './components';
import { Widgets } from './components'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div>
        <LeftSide />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default App;
