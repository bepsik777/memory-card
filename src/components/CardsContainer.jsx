import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const keys = [];

for (let i = 0; i < 12; i++) {
  const key = uuidv4();
  keys.push(key);
}

export default function CardsContainer({ handleScore }) {
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
    handleScore(e);
  };

  return (
    <main className="cards-container">
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "blue", order: cardOrder[0] }}
        id={keys[0]}
        imgId="Garura, Wings of Resonant Life"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "red", order: cardOrder[1] }}
        id={keys[1]}
        imgId="Terraforming"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "azure", order: cardOrder[2] }}
        id={keys[2]}
        imgId="Bystial Druiswurm"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "black", order: cardOrder[3] }}
        id={keys[3]}
        imgId="Blue-Eyes White Dragon"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "cyan", order: cardOrder[4] }}
        id={keys[4]}
        imgId="Purrely Pretty Memory"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "violet", order: cardOrder[5] }}
        id={keys[5]}
        imgId="Evenly Matched"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "yellow", order: cardOrder[6] }}
        id={keys[6]}
        imgId="Dimension Shifter"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "orange", order: cardOrder[7] }}
        id={keys[7]}
        imgId="Kashtira Shangri-Ira"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "green", order: cardOrder[8] }}
        id={keys[8]}
        imgId="Book of Moon"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "brown", order: cardOrder[9] }}
        id={keys[9]}
        imgId="Underworld Goddess of the Closed World"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightblue", order: cardOrder[10] }}
        id={keys[10]}
        imgId="Gameciel, the Sea Turtle Kaiju"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightgreen", order: cardOrder[11] }}
        id={keys[11]}
        imgId="Infinite Impermanence"
      ></Card>
    </main>
  );
}

function Card({ style, handleClick, id, imgId }) {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    let ignore = false;
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + imgId;
    const options = {
      method: "GET",
      mode: "cors",
    };
    const fetchImg = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const src = await result.data[0].card_images[0].image_url;
        setImgSrc(src)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    if (imgId && !ignore) {
      fetchImg();
    }
    return () => (ignore = true);
  });

  return (
    <div className="card" style={style} onClick={handleClick} id={id} key={id}>
      <img src={imgSrc} alt="" className="image"/>
    </div>
  );
}
