import { useState } from 'react'
import './App1.css'
import Component from './component'
import List from './list'
import anh1 from '../img/anh1.png'
import anh2 from '../img/anh2.png'
import anh3 from '../img/anh3.png'
import anh4 from '../img/anh4.png'
import anh5 from '../img/anh5.png'
import anh6 from '../img/anh6.png'
import anh7 from '../img/anh7.png'
import Giua from './giua'
import productList from './data'

function App() {
  const [count, setCount] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleButtonClick = (key) => {
    const selected = productList.find((item) => item.key === key);
    setSelectedImage(selected);

    return (
      <div className='container'>
        <Component></Component>
        <div className='giua' >
          <Giua theanh={anh1} ></Giua>
          <h1>Weather With You</h1>
          <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
        </div>
        <div className='cuoi'>
          <h1>New Release</h1>
          <div className='hienthi'>
            {productList.map((item, key) => {
              return <List onClick={() => handleButtonClick(item.key)}  propImg={item.propImg} propName={item.propName} propEx={item.propEx} />
            })}


          </div>
        </div>

      </div>
    )
  }
}
  export default App;
