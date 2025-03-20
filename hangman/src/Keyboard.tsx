import React from 'react'
import styles from './Keyboard.module.css'

const KEYS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function Keyboard() {

  
  return (

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr)",
      gap: ".5rem",
    }}>
      {KEYS.map((k)=>{ return <button key={k} className={`${styles.keyboardkey}`}>{k}</button>})}
    </div>
  )
}

export default Keyboard