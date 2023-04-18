import Title from "./components/Title";

export default function App() {
  return(
    <div className="grid">
      <div>
        <img src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" />
      </div>

      <div>
        <Title/>
        <button>Comprar Agora</button>
      </div>
    </div>
  )
}