import { useState } from 'react'
import words from './words.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'


function App() {
  const[word, setWord] = useState(()=>{return words[Math.floor(Math.random()*words.length)]})
  
  const[guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter))

  

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

      <HangmanDrawing numberOfGuesses={incorrectLetters.length}></HangmanDrawing>
      <HangmanWord guessedLetters={guessedLetters} word={word}></HangmanWord>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard></Keyboard>
      </div>
      
    </div>
  )
}

export default App
