export default function Header({score, bestScore}) {
  return (
  <header className="header"> 
    <div className="scoreContainer">
        <p className="score">Current Score: {score}</p>
        <p className="best-score">Best Score: {bestScore}</p>
    </div>
  </header>
  )
}

