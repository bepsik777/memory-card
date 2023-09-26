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
        id="Garura, Wings of Resonant Life"
        imgId="Garura, Wings of Resonant Life"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "red", order: cardOrder[1] }}
        id="Terraforming"
        imgId="Terraforming"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "azure", order: cardOrder[2] }}
        id="Bystial Druiswurm"
        imgId="Bystial Druiswurm"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "black", order: cardOrder[3] }}
        id="Blue-Eyes White Dragon"
        imgId="Blue-Eyes White Dragon"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "cyan", order: cardOrder[4] }}
        id="Purrely Pretty Memory"
        imgId="Purrely Pretty Memory"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "violet", order: cardOrder[5] }}
        id="Evenly Matched"
        imgId="Evenly Matched"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "yellow", order: cardOrder[6] }}
        id="Dimension Shifter"
        imgId="Dimension Shifter"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "orange", order: cardOrder[7] }}
        id="Kashtira Shangri-Ira"
        imgId="Kashtira Shangri-Ira"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "green", order: cardOrder[8] }}
        id="Book of Moon"
        imgId="Book of Moon"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "brown", order: cardOrder[9] }}
        id="Underworld Goddess of the Closed World"
        imgId="Underworld Goddess of the Closed World"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightblue", order: cardOrder[10] }}
        id="Gameciel, the Sea Turtle Kaiju"
        imgId="Gameciel, the Sea Turtle Kaiju"
      ></Card>
      <Card
        handleClick={handleClick}
        style={{ backgroundColor: "lightgreen", order: cardOrder[11] }}
        id="Infinite Impermanence"
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
  }, [imgId]);

  return (
    <div className="card" style={style} onClick={handleClick} id={id} key={id}>
      <img src={imgSrc} alt="" className="image"/>
    </div>
  );
}
