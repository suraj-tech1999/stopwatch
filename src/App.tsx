import { useState } from 'react';
import './App.css';

function App() {
  const data = ['apple', 'orange', 'banana', 'pinaaaple'];
  const [list, setList] = useState([]);

  const handleChange = (e: any) => {
    let result: any = [];
    data.forEach((item) => {
      if (item.includes(e.target.value)) {
        result.push(item);
      }
    });
    if (e.target.value !== '') {
      setList(result);
    } else {
      setList([]);
    }
  };

  return (
    <>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <br />
      <ul>
        {list && list.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default App;
