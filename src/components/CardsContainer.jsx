import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const keys = []
  
for (let i = 0; i < 12; i++) {
  const key = uuidv4()
  keys.push(key)
}

export default function CardsContainer() {
  const [cardOrder, setCardOrder] = useState(createRandomOrder());

  function createRandomOrder() {
    const orderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // Fisher-Yates shuffle algorithm
    for (let i = orderArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = orderArray[i];
      orderArray[i] = orderArray[randomIndex];
      orderArray[randomIndex] = temp;
    }
    return orderArray;
  }

  const handleClick = (e) => {
    setCardOrder(createRandomOrder());
    console.log(e.target.id)
  };

  return (
    <main className="cards-container">
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "blue", order: cardOrder[0] }}
        id={keys[0]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "red", order: cardOrder[1] }}
        id={keys[1]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "azure", order: cardOrder[2] }}
        id={keys[2]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "black", order: cardOrder[3] }}
        id={keys[3]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "cyan", order: cardOrder[4] }}
        id={keys[4]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "violet", order: cardOrder[5] }}
        id={keys[5]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "yellow", order: cardOrder[6] }}
        id={keys[6]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "orange", order: cardOrder[7] }}
        id={keys[7]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "green", order: cardOrder[8] }}
        id={keys[8]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "brown", order: cardOrder[9] }}
        id={keys[9]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightblue", order: cardOrder[10] }}
        id={keys[10]}
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightgreen", order: cardOrder[11] }}
        id={keys[11]}
      ></Card>
    </main>
  );
}

function Card({ style, handleClick, id }) {

  return (
    <div
      className="card"
      style={style}
      onClick={handleClick}
      id={id}
    ></div>
  );
}
