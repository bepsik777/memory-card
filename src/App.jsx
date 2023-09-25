import { useState } from 'react';
import Header from './components/Header.jsx'
import CardsContainer from './components/CardsContainer.jsx';


function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedCardsArray, setClickeCardsArray] = useState([])

  const handleScore = (e) => {
    const cardId = e.target.id
    if (clickedCardsArray.includes(cardId)) {
      setClickeCardsArray([])
      if (score > bestScore) setBestScore(score)
      setScore(0)
    } else {
      const newScore = score + 1
      setClickeCardsArray([...clickedCardsArray, cardId])
      setScore(newScore)
    }


    /*
    When card is clicked: 
    Check if the card was already clicked (compare with clicked array):

    If it was clicked:
    - clicked array equals empty array []
    - check if score is bigger then best score
      * if it was, then setBestScore to score
    - setScore to 0

    If it was not clicked: 
    - add card id to clicked array
    - setscore to score + 1

    if clicked cards array length equals 12 endGame()
    */
  }

  return (
    <>
    <Header score={score} bestScore={bestScore}></Header>
    <CardsContainer handleScore={handleScore}></CardsContainer>
    </>
  )
}

export default App;
