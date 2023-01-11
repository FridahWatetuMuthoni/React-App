import './index.css';
import Item from './components/Item';
import data from './data';
import { useState } from 'react';
import Form from './components/Form';
import Counter from './components/Counter';
import boxes from './boxs';
import Box from './components/Box'
import Forms from './components/Forms';

function App() {
  const [formData, setFormData ] = useState([])
  console.log(formData)
  const [boxData, setBoxData] = useState(boxes) 
  console.log(boxData)
  
  const handleClickToggle = (id) => {
    setBoxData((prev) => {
      return prev.map((element) => {
        return element.id === id ? {...element, on:!element.on}:{...element}
      })
     /* const newSquares = []
      prev.forEach((element) => {
        if (element.id === id) {
          const updatedSquare = {
            ...element, on:!element.on
          }
          newSquares.push(updatedSquare)
        }
        else {
          newSquares.push(element)
        }
      })
      return newSquares*/
    })
  }
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
      <section className='margin box-wrapper'>
        <div className='boxes'>
          {
           boxData.map((box,index) => {
            return <Box key={box.id} index={index} id={box.id} on={ box.on} handleClick={handleClickToggle} />
          })
        }
        </div>
      </section>
      <section className='margin'>
        <Forms/>
      </section>
    </div>
  );
}

export default App;
