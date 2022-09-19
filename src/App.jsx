import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'
import image from './assets/img/pngwing.png'
function App() {


  //Obtener elemento Random de un arrelo
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]
  
  const [randomQuote, setRandomQuote] = useState(firstQuote)  
  const [randomColor, setRandomColor] = useState(firstColor)
  
  const backgroundObject = {
  backgroundColor: randomColor
}
 const getRandomAll = () => {
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomColor(color[getIndexRandom(color)])
 }

  return (
    <div style={backgroundObject} className="App">
      
            <div className='image'>
            <img src= {image} alt="fondo" />
            </div>
      <QuoteBox 
      randomQuote = {randomQuote} 
      randomColor = {randomColor}
      getRandomAll = {getRandomAll}
            />
      
    </div>
  )
}

export default App
