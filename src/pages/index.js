import React from "react"
import '../../css/main.css'
import { Helmet } from "react-helmet"

export default function Home() {
  return <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Yeison Fabian Tapia Lozano</title>
      <link rel="canonical" href="https://yeisontapia.github.io/" />
    </Helmet>
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
        href="https://twitter.com/yeitapia" 
        className="item-a" 
        target="_blank" 
        rel="noreferrer">
        Twitter
      </a> 
    </div>
  </div>
}
