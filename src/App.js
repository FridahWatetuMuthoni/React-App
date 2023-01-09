import './index.css';
import Item from './components/Item';
import data from './data';
import { useState } from 'react';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {
  const [formData, setFormData ] = useState([])
  console.log(formData)
  return (
    <div className="App">
      {data.map((item)=>{
         return (<Item key={item.id} item={item}/>)
      })}
      <section className='margin'>
        <Counter/>
      </section>
      <section className='margin'>
        <Form setData={setFormData} />
      </section>
    </div>
  );
}

export default App;
