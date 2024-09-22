import { useState } from 'react'
import '../Style/App.css'

export default function Button() {
  const [text, setText] = useState('Explore now');

  return (
    <div className="buttons">
        <button className="btn1"> {text} <span>▶</span></button>
      </div>

  )
}
