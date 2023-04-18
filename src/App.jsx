import Card from "./components/Card/Card";
import Poster1 from "./components/Card/img/sw-poster.jpg"
import Poster2 from "./components/Card/img/esb-poster.jpg"
import Poster3 from "./components/Card/img/rotj-poster.jpg"

export default function App() {
  return(
    <>
      <h1>Exercício 1</h1>
      <Card title="Pôster: Star Wars (1977)" imageUrl={Poster1}/>
      <Card title="Pôster: Empire Strikes Back (1980)" imageUrl={Poster2}/>
      <Card title="Pôster: Return of the Jedi (1983)" imageUrl={Poster3}/>
    </>
  )
}