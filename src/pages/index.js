import React from "react"
import '../../css/main.css'

export default function Home() {
  return <div className="container">
    <div className="item">
      <span role="img" aria-label="emojis">
        🇨🇴🧑🏽‍💻
      </span>
    </div>
    <div className="item">
      Yeison Fabian Tapia Lozano
    </div>
    <div className="item">
      Software Developer
    </div>
    <div className="item">
      <a 
        href="https://github.com/yeisonTapia/" 
        className="item-a" 
        target="_blank" 
        rel="noreferrer">
        GitHub 
      </a> 
      <a 
        href="https://github.com/yeisonTapia/" 
        className="item-a" 
        target="_blank" 
        rel="noreferrer">
        Twitter
      </a> 
    </div>
  </div>
}
