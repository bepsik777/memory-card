export default function CardsContainer() {
  return (
    <main className="cards-container">
      <Card style={{ backgroundColor: "blue"}}></Card>
      <Card style={{ backgroundColor: "red" }}></Card>
      <Card style={{ backgroundColor: "azure" }}></Card>
      <Card style={{ backgroundColor: "black" }}></Card>
      <Card style={{ backgroundColor: "cyan" }}></Card>
      <Card style={{ backgroundColor: "violet" }}></Card>
      <Card style={{ backgroundColor: "yellow" }}></Card>
      <Card style={{ backgroundColor: "orange" }}></Card>
      <Card style={{ backgroundColor: "green" }}></Card>
      <Card style={{ backgroundColor: "brown" }}></Card>
      <Card style={{ backgroundColor: "lightblue" }}></Card>
      <Card style={{ backgroundColor: "lightgreen" }}></Card>
    </main>
  );
}

function Card({style}) {
  return <div className="card" style={style}></div>;
}

