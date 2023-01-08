import './index.css';
import Item from './components/Item';
import data from './data';

function App() {
  return (
    <div className="App">
      {data.map((item)=>{
         return (<Item key={item.id} item={item}/>)
      })}
    </div>
  );
}

export default App;
