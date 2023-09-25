import { useState } from "react";

export default function CardsContainer() {
  const [cardOrder, setCardOrder] = useState(createRandomOrder());

  function createRandomOrder() {
    const orderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //Fisher-Yates shuffle algorithm
    for (let i = orderArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        const temp = orderArray[i]
        orderArray[i] = orderArray[randomIndex]
        orderArray[randomIndex] = temp
    }
    return orderArray
  }

  return (
    <main className="cards-container">
      <Card style={{ backgroundColor: "blue", order: cardOrder[0] }}></Card>
      <Card style={{ backgroundColor: "red", order: cardOrder[1] }}></Card>
      <Card style={{ backgroundColor: "azure", order: cardOrder[2] }}></Card>
      <Card style={{ backgroundColor: "black", order: cardOrder[3] }}></Card>
      <Card style={{ backgroundColor: "cyan", order: cardOrder[4] }}></Card>
      <Card style={{ backgroundColor: "violet", order: cardOrder[5] }}></Card>
      <Card style={{ backgroundColor: "yellow", order: cardOrder[6] }}></Card>
      <Card style={{ backgroundColor: "orange", order: cardOrder[7] }}></Card>
      <Card style={{ backgroundColor: "green", order: cardOrder[8] }}></Card>
      <Card style={{ backgroundColor: "brown", order: cardOrder[9] }}></Card>
      <Card
        style={{ backgroundColor: "lightblue", order: cardOrder[10] }}
      ></Card>
      <Card
        style={{ backgroundColor: "lightgreen", order: cardOrder[11] }}
      ></Card>
    </main>
  );
}

function Card({ style }) {
  return <div className="card" style={style}></div>;
}

/* 
I can try reordering the cards on every render using CSS Order property. 
Like on each order, set a random naumber from 0 to 11 to each Card element
Where should that function live?
I think it should use less computation then creating a copyt of array of components on each render
*/
