import { useState } from 'react'
import words from './words.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'


function App() {
  const[word, setWord] = useState(()=>{return words[Math.floor(Math.random()*words.length)]})
  
  const[guessedLetters, setGuessedLetters] = useState<string[]>([]);
  

  

  return (
    <div
      style ={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}>
      <div 
      style ={{
        fontSize: "2rem",
        textAlign: "center"
      }}>Hi {word}</div>

      <HangmanDrawing></HangmanDrawing>
      <HangmanWord></HangmanWord>
      <Keyboard></Keyboard>
    </div>
  )
}

export default App
