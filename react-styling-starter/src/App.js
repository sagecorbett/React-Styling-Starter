import './App.css';
import Child1 from './components/child1/Child1'
import Child2 from './components/child2/Child2'

function App() {
  return (
    <div>
      <p>I am the parent component</p>
      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;
