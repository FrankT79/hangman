import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[]
  word: string
}

function HangmanWord({guessedLetters, word}:HangmanWordProps) {
  
  return (
    <div style={{
      display: "flex", 
      gap: ".25em", 
      fontSize: "6rem", 
      fontWeight: "bold", 
      textTransform: "uppercase", 
      fontFamily: "monospace"}}>
        
      {word.split("").map((letter, index)=>(
        <span style={{borderBottom: ".1em solid black"}} key= {index}>
          <span style={{visibility: guessedLetters.includes(letter)?  "visible" : "hidden",}}>
            {letter}
          </span>
        </span>))}</div>
  )
}

export default HangmanWord